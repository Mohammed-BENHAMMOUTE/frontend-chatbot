"use client";
import "@assets/css/style.css";
import { useMemo, useEffect, useState } from "react";
import Sidebar from "@components/Sidebar";
import Link from "next/link";
import Image from "next/image";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import {
  blogimg10,
  imagesend,
  pdficon,
  pdficon3,
  pdficon4,
  plusicon,
  refreshicon,
  searchnormal,
  blogimg12,
  blogimg2,
  blogimg4,
  blogimg6,
  blogimg8,
} from "../../components/imagepath";
import Table from "@components/Table";

const Medecins = () => {
  const columns = useMemo(
    () => [
      {
        Header: "Nom",
        accessor: "name",
      },
      {
        Header: "Département",
        accessor: "department",
      },
      {
        Header: "Spécialisation",
        accessor: "specialization",
      },
      {
        Header: "Diplôme",
        accessor: "degree",
      },
      {
        Header: "Mobile",
        accessor: "mobile",
      },
      {
        Header: "Email",
        accessor: "email",
      },

      {
        Header: "",
        accessor: "actions",
      },
    ],
    []
  );

  const data = useMemo(
    () => [
      {
        name: "Andrea Lalema",
        department: "Otolaryngology",
        specialization: "Infertility",
        degree: "MBBS, MS",
        mobile: "+1 23 456890",
        email: "example@email.com",
        joiningDate: "01.10.2022",
      },
      {
        name: "Dr. Smith Bruklin",
        department: "Urology",
        specialization: "Prostate",
        degree: "MBBS, MS",
        mobile: "+1 23 456890",
        email: "example@email.com",
        joiningDate: "01.10.2022",
      },
      {
        name: "chaima ait ali",
        department: "Otolaryngology",
        specialization: "Infertility",
        degree: "MBBS, MS",
        mobile: "+1 23 456890",
        email: "example@email.com",
        joiningDate: "09.09.2024",
      },

      {
        name: "Dr. Smith Bruklin",
        department: "Urology",
        specialization: "Prostate",
        degree: "MBBS, MS",
        mobile: "+1 23 456890",
        email: "example@email.com",
        joiningDate: "01.10.2022",
      },
      {
        name: "Andrea Lalema",
        department: "Otolaryngology",
        specialization: "Infertility",
        degree: "MBBS, MS",
        mobile: "+1 23 456890",
        email: "example@email.com",
        joiningDate: "01.10.2022",
      },
      {
        name: "Dr. Smith Bruklin",
        department: "Urology",
        specialization: "Prostate",
        degree: "MBBS, MS",
        mobile: "+1 23 456890",
        email: "example@email.com",
        joiningDate: "01.10.2022",
      },
      {
        name: "Andrea Lalema",
        department: "Otolaryngology",
        specialization: "Infertility",
        degree: "MBBS, MS",
        mobile: "+1 23 456890",
        email: "example@email.com",
        joiningDate: "01.10.2022",
      },
      {
        name: "Dr. Smith Bruklin",
        department: "Urology",
        specialization: "Prostate",
        degree: "MBBS, MS",
        mobile: "+1 23 456890",
        email: "example@email.com",
        joiningDate: "01.10.2022",
      },
      {
        name: "Andrea Lalema",
        department: "Otolaryngology",
        specialization: "Infertility",
        degree: "MBBS, MS",
        mobile: "+1 23 456890",
        email: "example@email.com",
        joiningDate: "01.10.2022",
      },
      {
        name: "Dr. Smith Bruklin",
        department: "Urology",
        specialization: "Prostate",
        degree: "MBBS, MS",
        mobile: "+1 23 456890",
        email: "example@email.com",
        joiningDate: "01.10.2022",
      },
      {
        name: "Andrea Lalema",
        department: "Otolaryngology",
        specialization: "Infertility",
        degree: "MBBS, MS",
        mobile: "+1 23 456890",
        email: "example@email.com",
        joiningDate: "01.10.2022",
      },
      {
        name: "Dr. Smith Bruklin",
        department: "Urology",
        specialization: "Prostate",
        degree: "MBBS, MS",
        mobile: "+1 23 456890",
        email: "example@email.com",
        joiningDate: "01.10.2022",
        actions: "actions",
      },
      // data for table
    ],
    []
  );
  const [filteredData, setFilteredData] = useState(data);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const result = data.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(result);
  }, [search]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <Sidebar activeClassName="doctors" />
      <>
        <div className="page-wrapper">
          <div className="content">
            {/* Page Header */}
            <div className="page-header">
              <div className="row">
                <div className="col-sm-12">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">Page d'accueil </Link>
                    </li>
                    <li className="breadcrumb-item">
                      <FeatherIcon icon="chevron-right" />
                    </li>
                    <li className="breadcrumb-item active">Médecins</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            <div className="row">
              <div className="col-sm-12">
                <div className="card card-table show-entire">
                  <div className="card-body">
                    {/* Table Header */}
                    <div className="page-table-header mb-2">
                      <div className="row align-items-center">
                        <div className="col">
                          <div className="doctor-table-blk">
                            <h3>Médecins</h3>
                            <div className="doctor-search-blk">
                              <div className="top-nav-search table-search-blk">
                                <form className="d-flex">
                                  <input
                                    type="text"
                                    value={search}
                                    onChange={handleSearch}
                                    className="form-control"
                                    placeholder="chercher ici"
                                  />
                                  <div className="btn">
                                    <Image src={searchnormal} alt="#" />
                                  </div>
                                </form>
                              </div>
                              {/* <div className="add-group">
                                <Link
                                  href="/"
                                  className="btn btn-primary add-pluss ms-2"
                                >
                                  <Image src={plusicon} alt="#" />
                                </Link>
                                <Link
                                  href="/"
                                  className="btn btn-primary doctor-refresh ms-2"
                                >
                                  <Image src={refreshicon} alt="#" />
                                </Link>
                              </div> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Table Header */}
                    {/* Table*/}
                    <div className="table-responsive ">
                      <Table columns={columns} data={filteredData} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Page Header */}
          </div>
        </div>
      </>
    </>
  );
};

export default Medecins;
