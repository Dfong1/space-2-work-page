import Image from "next/image";
import React from "react";

export default function Index() {
  return (
    <div>
      <div className="container-fluid p-4">
        <h1 className="text-center display-1 display-md-1">
          ¿Qué es Space 2 Work?
        </h1>
        <p className="h4 text-center m-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor,
          provident possimus. Facere tempora omnis asperiores odit fugiat culpa
          iste praesentium a molestiae recusandae obcaecati, perferendis quod
          deserunt officiis doloremque quidem.
        </p>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 align-items-center">
          <p className="h3 text-center fw-bold mb-4 mb-md-0">Cuenta con:</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ducimus suscipit culpa nemo laborum obcaecati laboriosam est, rem aspernatur cumque odio pariatur et iure quidem aut animi. Eius, veritatis officiis.
          </p>
        </div>
        <div className="col-12 col-md-6 align-items-center justify-content-center">
          <div className="mb-2">
            <Image alt="" src="/images/sala2.png" width={400} height={250} className="img-fluid rounded-2 shadow"/>
          </div>
          <div className="mt-2 d-flex justify-content-center">
            <Image alt="" src="/images/cowork.png" width={400} height={250} className="img-fluid rounded-2 shadow"/>
          </div>
          
        </div>
      </div>
    </div>
  );
}
