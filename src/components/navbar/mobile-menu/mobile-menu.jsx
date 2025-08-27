import { Fragment, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/icons-material/Menu";
import Clear from "@mui/icons-material/Clear";
import Scrollbar from "@/components/scrollbar";
import { styled } from "@mui/system";
import { Tabs } from "@mui/base/Tabs";
import { TabsList as BaseTabsList } from "@mui/base/TabsList";
import { TabPanel as BaseTabPanel } from "@mui/base/TabPanel";
import { buttonClasses } from "@mui/base/Button";
import { Tab as BaseTab, tabClasses } from "@mui/base/Tab";
import { Span } from "@/components/Typography";

export default function MobileMenu({
  categories = [],
  fullcategories = [],
  products = [],
}) {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [selectedTab, setSelectedTab] = useState("0");
  const [subCategories, setSubCategories] = useState({});

  const handleClose = () => {
    setOpenDrawer(false);
  };

  const handleTabChange = (event, newValue) => {
    console.log({ newValue });
    setSelectedTab(newValue);
  };

  useEffect(() => {
    const genderCategories = JSON.parse(
      categories.find((category) => category.name === "Género")?.values ?? "[]"
    );
    const otherCategories = categories
      .filter((category) => category.name !== "Género")
      .map((c) => JSON.parse(c.values ?? "[]"))
      .flat();

    let categoriesObject = {};
    for (const category of genderCategories) {
      const productsCat = products.filter((product) =>
        product.categories.some((cat) => cat.category_id === category.id)
      );
      const categoriesCat = productsCat
        .map((product) => product.categories)
        .flat()
        .map((c) => c.category_id)
        .filter((id) => id != category.id);

      const subCategoryNames = otherCategories
        .filter((cat) => categoriesCat.includes(cat.id))
        .map((cat) => cat.name);

      categoriesObject[category.id] = [...new Set(categoriesCat)];
    }
    setSubCategories(categoriesObject);
  }, [categories, products, fullcategories]);

  return (
    <Fragment>
      <IconButton
        onClick={() => setOpenDrawer(true)}
        sx={{
          flexShrink: 0,
          color: "grey.600",
        }}
      >
        <Menu />
      </IconButton>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={handleClose}
        sx={{
          zIndex: 15001,
          width: "75%",
          "& .MuiDrawer-paper": {
            width: "75%",
          },
        }}
      >
        <Tabs defaultValue={39}>
          <TabsList aria-label="basic tabs example">
            {JSON.parse(
              categories.find((category) => category.name === "Género")
                ?.values ?? "[]"
            ).map((value, index) => (
              <Tab key={index} value={value.id}>
                {value.name}
              </Tab>
            ))}
          </TabsList>
          {JSON.parse(
            categories.find((category) => category.name === "Género")?.values ??
              "[]"
          ).map((value, index) => {
            return (
              <TabPanel key={index} value={value.id}>
                {subCategories[value.id]?.map((category_id, idx) => {
                  const category = fullcategories.find(
                    (cat) => cat.category_id == category_id
                  );
                  return (
                    <div
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "10px 0",
                        columnGap: "10px",
                      }}
                      onClick={() => {
                        console.log("clicked");
                        window.location.href = `/shop?categories=${category_id + "," + value.id}`;
                      }}
                    >
                      {category?.images?.length > 0 && (
                        <img
                          width={50}
                          style={{
                            borderRadius: "100%",
                            border: "2px solid lightgray",
                          }}
                          src={category?.images[0]}
                          alt={category?.name}
                        />
                      )}
                      <Span
                        style={{
                          fontSize: "1.1rem",
                        }}
                      >
                        {category?.name}
                      </Span>
                    </div>
                  );
                })}
              </TabPanel>
            );
          })}
        </Tabs>
      </Drawer>
    </Fragment>
  );
}

const Tab = styled(BaseTab)`
  font-size: 0.94rem;
  color: #6e6e6e;
  font-family: "__Open_Sans_af7b73", "__Open_Sans_Fallback_af7b73";
  background-color: transparent;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 4px solid transparent;
  padding-bottom: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
  &[aria-selected="true"] {
    color: black;
    border-bottom: 4px solid black;
  }
`;

const TabPanel = styled(BaseTabPanel)`
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 10px;
`;

const TabsList = styled(BaseTabsList)`
  color: black;
  display: flex;
  column-gap: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  overflow-x: scroll;
  max-width: 100%;
  border-bottom: 1px solid lightgray;
`;
