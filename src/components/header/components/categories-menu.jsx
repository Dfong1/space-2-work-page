import React, { useState } from "react";
import Button from "@mui/material/Button";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import ChevronRight from "@mui/icons-material/ChevronRight";
import Category from "@/icons/Category";
import { FlexBox } from "@/components/flex-box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function CategoriesMenu({ categories = [] }) {
  return (
    <CategoryMenu
      MenuListProps={{
        style: {
          zIndex: 1400, // Incrementar el zIndex
        },
      }}
      categories={categories}
      render={(handler) => (
        <FlexBox color="grey.600" alignItems="center" ml={2}>
          <Button color="inherit" onClick={handler}>
            <Category fontSize="small" color="inherit" />
            <KeyboardArrowDown fontSize="small" color="inherit" />
          </Button>
        </FlexBox>
      )}
    />
  );
}

function CategoryMenu({ categories, render }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [subMenuAnchorEl, setSubMenuAnchorEl] = useState(null);
  const [currentSubcategories, setCurrentSubcategories] = useState([]);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    handleSubMenuClose();
  };

  const handleCategoryHover = (event, subcategories) => {
    setSubMenuAnchorEl(event.currentTarget);
    setCurrentSubcategories(subcategories);
  };

  const handleSubMenuClose = () => {
    setSubMenuAnchorEl(null);
    setCurrentSubcategories([]);
  };

  return (
    <>
      {render(handleClick)}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        MenuListProps={{
          style: {
            zIndex: 1400, // Incrementar el zIndex
          },
        }}
      >
        {categories.length === 0 ? (
          <MenuItem disabled>No categories available</MenuItem>
        ) : (
          categories
            .map((category) => ({
              ...category,
              subcategories: JSON.parse(category.values ?? "[]"),
            }))
            .map((category, index) => (
              <MenuItem
                key={index}
                onMouseEnter={(e) =>
                  handleCategoryHover(e, category.subcategories)
                }
                onClick={handleClose}
              >
                {category.name}
                {category.subcategories &&
                  category.subcategories.length > 0 && (
                    <ChevronRight fontSize="small" />
                  )}
              </MenuItem>
            ))
        )}
      </Menu>

      <Menu
        anchorEl={subMenuAnchorEl}
        open={Boolean(subMenuAnchorEl)}
        onClose={handleSubMenuClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        MenuListProps={{
          onMouseLeave: handleSubMenuClose,
          style: {
            zIndex: 1400, // Incrementar el zIndex
          },
        }}
      >
        {currentSubcategories.map((subcategory, index) => (
          <MenuItem key={index} onClick={handleClose}>
            {subcategory.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
