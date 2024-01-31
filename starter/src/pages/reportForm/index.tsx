import Header from "@/components/Header";
import StraightNavigation from "@/components/StraightNavigation";
import Link from "next/link";
import React from "react";

const ReportForm = () => {
  return (
    <>
      <div className="container">
        <div className="row py-3">
          <Link href={"/"}>
            <Header
              leftIcon="<"
              image={`images/viber_image_2023-10-22_18-08-15-736 2.svg`}
            />
          </Link>
        </div>

        <div className="row py-5">
          <div className="col-12 text-center ">
            <h6 className="text-uppercase">пријави загадување</h6>
          </div>
        </div>
        <div className="row pb-5">
          <div className="col-12">
            <p className="small">Избери извор на загадување</p>
          </div>
        </div>
        <div className="row pb-5">
          <div className="d-flex justify-content-between col-12 text-center">
            <div className="col-4">
              <div className="box-shadow cards-costume">
                <i
                  className="fa-solid fa-industry fa-2x"
                  style={{ color: `#EAEAEA` }}
                ></i>
                <p
                  className="small m-0 pt-3"
                  style={{ color: `#343A40`, fontSize: `10px` }}
                >
                  Фабрика
                </p>
              </div>
            </div>
            <div className="col-4">
              <div className="box-shadow cards-costume">
                <i
                  className="fa-solid fa-house-chimney fa-2x"
                  style={{ color: `#EAEAEA` }}
                ></i>
                <p
                  className="small m-0 pt-3 "
                  style={{ color: `#343A40`, fontSize: `10px` }}
                >
                  Домаќинство
                </p>
              </div>
            </div>
            <div className="col-4">
              <div className="box-shadow cards-costume mb-5">
                <i
                  className="fa-solid fa-smog fa-2x"
                  style={{ color: `#EAEAEA` }}
                ></i>
                <p
                  className="small m-0 pt-3"
                  style={{ color: `#343A40`, fontSize: `10px` }}
                >
                  Друго
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row py-5">
          <div className="col-12  pb-5">
            <p>
              прикачи фотографија <span className="small">(*задолжително)</span>
            </p>
          </div>
          <div className="col-10 offset-1 d-flex flex-column justify-content-center align-items-center text-center">
            <div className="photoField box-shadow">
              <i
                className="fa-solid fa-camera fa-5x"
                style={{ color: `#EAEAEA` }}
              ></i>
              <p className="small" style={{ color: `#343A40` }}>
                Take a photo
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className="row py-5">
          <StraightNavigation />
        </div>
        <div className="row py-5">
          <div className="col-8 offset-2 d-flex align-items-center justify-content-between">
            <div>
              <button className="cancelBtn">X</button>
            </div>
            <div>
              <button className="btn-green border-0 rounded py-3 px-5">
                потврди
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportForm;
