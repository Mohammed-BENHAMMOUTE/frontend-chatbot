"use client";
import "@assets/css/style.css";
import { useEffect, useState } from "react";
import { Form, Input, DatePicker, TimePicker } from "antd";
import Sidebar from "@components/Sidebar";
import Link from "next/link";
import Select from "react-select";
import moment from "moment";
import MyFileInput from "@components/MyFileInput";
import DoctorSelectionForm from "@components/DoctorSelectionForm";

const Formulaire = () => {
  const [isConsentChecked, setIsConsentChecked] = useState(false);
  const [selectedHour, setSelectedHour] = useState(null);
  const disabledDate = (current) => {
    if (!current || !current.isValid()) {
      return false;
    }
    const dayOfWeek = current.day();
    const isNotWedOrFri = dayOfWeek !== 3 && dayOfWeek !== 5;
    const isBeforeToday = current && current < moment().startOf("day");
    const isToday = current.isSame(moment(), "day");
    const isPast1130 = moment().isAfter(moment().set({ hour: 11, minute: 30 }));

    return isNotWedOrFri || isBeforeToday || (isToday && isPast1130);
  };
  const disabledHours = () => {
    const hours = [];
    for (let i = 0; i < 24; i++) {
      if (i < 9 || i > 12) {
        hours.push(i);
      }
    }
    return hours;
  };

  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [Cas, setCas] = useState([
    { value: 2, label: "Atteint d'une maladie rare" },
    { value: 3, label: "Atteint d'une affection Longue Durée" },
    { value: 4, label: "En détention" },
    { value: 5, label: "Patient vivant en zone médiocre " },
    { value: 6, label: "Autre (à préciser en description)" },
  ]);
  const [Specialites, setSpecialites] = useState([
    { value: 1, label: "Allergologue" },
    { value: 2, label: "Anesthésiste" },
    { value: 3, label: "Cardiologue" },
    { value: 4, label: "Chirurgien" },
    { value: 5, label: "Dermatologue" },
    { value: 6, label: "Endocrinologue" },
    { value: 7, label: "Gastro-entérologue" },
    { value: 8, label: "Gynécologue" },
    { value: 9, label: "Hématologue" },
    { value: 10, label: "Infectiologue" },
    { value: 11, label: "Médecin généraliste" },
    { value: 12, label: "Néphrologue" },
    { value: 13, label: "Neurologue" },
    { value: 14, label: "Oncologue" },
    { value: 15, label: "Ophtalmologue" },
    { value: 16, label: "Orthopédiste" },
    { value: 17, label: "Oto-rhino-laryngologiste (ORL)" },
    { value: 18, label: "Pédiatre" },
    { value: 19, label: "Pneumologue" },
    { value: 20, label: "Psychiatre" },
    { value: 21, label: "Radiologue" },
    { value: 22, label: "Rhumatologue" },
    { value: 23, label: "Urologue" },
  ]);

  useEffect(() => {
    const handleSuivant1 = () => {
      document.querySelector('[href="#bottom-justified-tab2"]').click();
    };
    const handleSuivant2 = () => {
      document.querySelector('[href="#bottom-justified-tab3"]').click();
    };
    const handleSuivant3 = () => {
      document.querySelector('[href="#bottom-justified-tab4"]').click();
    };

    const suivant1Element = document.getElementById("suivant1");
    const suivant2Element = document.getElementById("suivant2");
    const suivant3Element = document.getElementById("suivant3");

    if (suivant1Element) {
      suivant1Element.addEventListener("click", handleSuivant1);
    }
    if (suivant2Element) {
      suivant2Element.addEventListener("click", handleSuivant2);
    }
    if (suivant3Element) {
      suivant3Element.addEventListener("click", handleSuivant3);
    }

    return () => {
      const suivant1ElementCleanup = document.getElementById("suivant1");
      const suivant2ElementCleanup = document.getElementById("suivant2");
      const suivant3ElementCleanup = document.getElementById("suivant3");

      if (suivant1ElementCleanup) {
        suivant1ElementCleanup.removeEventListener("click", handleSuivant1);
      }
      if (suivant2ElementCleanup) {
        suivant2ElementCleanup.removeEventListener("click", handleSuivant2);
      }
      if (suivant3ElementCleanup) {
        suivant3ElementCleanup.removeEventListener("click", handleSuivant3);
      }
    };
  }, []);

  const handleCheckboxChange = () => {
    setIsConsentChecked(!isConsentChecked);
  };

  return (
    <div id="root" style={{ backgroundColor: "white" }}>
      <Sidebar activeClassName="dashboard" />
      <div className="page-wrapper">
        <div className="col-md-9 mx-auto">
          <div className="card" style={{ border: "none" }}>
            <div className="card-body">
              <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    href="#bottom-justified-tab1"
                    data-bs-toggle="tab"
                  >
                    Info Générales
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    href="#bottom-justified-tab2"
                    data-bs-toggle="tab"
                  >
                    Données Cliniques
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    href="#bottom-justified-tab3"
                    data-bs-toggle="tab"
                  >
                    Inviter des Médecins
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    href="#bottom-justified-tab4"
                    data-bs-toggle="tab"
                  >
                    Consentement
                  </Link>
                </li>
              </ul>
              <div className="tab-content">
                <div
                  className="tab-pane show active"
                  id="bottom-justified-tab1"
                >
                  <div className="col-md-14">
                    <div className="card-box">
                      <div className="card-titles">
                        <h4
                          className="card-title"
                          style={{
                            marginBottom: "20px",
                            fontWeight: "bold",
                          }}
                        >
                          Info Générales
                        </h4>
                        <h4
                          className="card-title"
                          style={{
                            marginBottom: "50px",
                            color: "#BDC0E3",
                            textAlign: "center",
                          }}
                        >
                          Remplissons les informations de base sur le patient et
                          la discussion
                        </h4>
                      </div>
                      <form action="#">
                        <div className="row">
                          <div className="col-md-5 mx-auto">
                            <label className="col-md-6 col-form-label">
                              Prénom du Patient
                            </label>
                            <div className="form-group row">
                              <div className="col-md-9">
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                            <label className="col-md-3 col-form-label">
                              Sexe
                            </label>
                            <div className="form-group row">
                              <div className="col-md-9">
                                <div className="form-check form-check-inline">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="gender"
                                    id="gender_male"
                                    defaultValue="option1"
                                    defaultChecked=""
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="gender_male"
                                  >
                                    Male
                                  </label>
                                </div>
                                <div className="form-check form-check-inline">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="gender"
                                    id="gender_female"
                                    defaultValue="option2"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="gender_female"
                                  >
                                    Femelle
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-5">
                            <label className="col-md-6 col-form-label">
                              Nom du Patient
                            </label>
                            <div className="form-group row">
                              <div className="col-md-9">
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                            <label className="col-md-6 col-form-label">
                              Age du Patient
                            </label>
                            <div className="form-group row">
                              <div className="col-md-9">
                                <input type="number" className="form-control" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-10 mx-auto">
                          <label className="col-md-10 col-form-label">
                            Cas du Patient
                          </label>
                          <div className="form-group row">
                            <div className="custom-width-11-5">
                              <Select
                                defaultValue={selectedOption}
                                onChange={setSelectedOption}
                                options={Cas}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-10 mx-auto">
                          <label className="col-form-label col-md-6">
                            Titre de la Discussion
                          </label>
                          <div className="form-group row">
                            <div className="custom-width-11-5">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Titre"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-10 mx-auto">
                          <label className="col-form-label col-md-6">
                            Motif de Discussion
                          </label>
                          <div className="form-group row">
                            <div className="custom-width-11-5">
                              <textarea
                                rows={5}
                                cols={5}
                                className="form-control"
                                placeholder="Détaillez la raison pour laquelle vous voulez créer cette discussion"
                                defaultValue={""}
                              />
                            </div>
                          </div>
                        </div>
                        <div id="suivant1" className="text-end">
                          <button
                            id="suivant1"
                            type="button"
                            className="btn btn-primary"
                          >
                            Suivant
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="bottom-justified-tab2">
                  <div className="col-md-14">
                    <div className="card-box">
                      <div className="card-titles">
                        <h4
                          className="card-title"
                          style={{
                            marginBottom: "20px",
                            fontWeight: "bold",
                          }}
                        >
                          Données Cliniques
                        </h4>
                        <h4
                          className="card-title"
                          style={{
                            marginBottom: "50px",
                            color: "#BDC0E3",
                            textAlign: "center",
                          }}
                        >
                          Importez tout fichier qui serait utile aux autres
                          medecins
                        </h4>
                      </div>
                      <form action="#">
                        <div className="col-md-10 mx-auto">
                          <label className="col-form-label col-md-6">
                            Eventuels Traitements
                          </label>
                          <div className="form-group row">
                            <div className="custom-width-11-5">
                              <textarea
                                rows={5}
                                cols={5}
                                className="form-control"
                                placeholder="Traitements"
                                defaultValue={""}
                              />
                            </div>
                          </div>
                        </div>
                        <MyFileInput />
                        <div className="text-end">
                          <button
                            type="button"
                            id="suivant2"
                            className="btn btn-primary"
                          >
                            Suivant
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="bottom-justified-tab3">
                  <div className="col-md-14">
                    <div className="card-box">
                      <div className="card-titles">
                        <h4
                          className="card-title"
                          style={{
                            marginBottom: "20px",
                            fontWeight: "bold",
                          }}
                        >
                          Inviter des Médecins
                        </h4>
                        <h4
                          className="card-title"
                          style={{
                            marginBottom: "20px",
                            color: "#BDC0E3",
                            textAlign: "center",
                          }}
                        >
                          Choisissez les médecins à inviter à la discussion et
                          la date et l'heure convenables
                        </h4>
                      </div>
                      <div
                        className="col-md-4 mx-auto"
                        style={{ margin: 0, padding: "10px" }}
                      >
                        <div className="card" style={{ margin: 0 }}>
                          <div
                            className="card-body"
                            style={{ padding: "10px" }}
                          >
                            <ul
                              className="nav nav-tabs nav-tabs-solid nav-tabs-rounded nav-justified"
                              style={{ fontSize: "14px", marginBottom: 0 }}
                            >
                              <li
                                className="nav-item"
                                style={{ padding: "5px" }}
                              >
                                <Link
                                  className="nav-link active"
                                  href="#solid-rounded-justified-tab1"
                                  data-bs-toggle="tab"
                                  style={{ padding: "5px 10px" }}
                                >
                                  Privée
                                </Link>
                              </li>
                              <li
                                className="nav-item"
                                style={{ padding: "5px" }}
                              >
                                <Link
                                  className="nav-link"
                                  href="#solid-rounded-justified-tab2"
                                  data-bs-toggle="tab"
                                  style={{ padding: "5px 10px" }}
                                >
                                  Ouverte
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="tab-content" style={{ marginTop: 0 }}>
                        <div
                          className="tab-pane show active"
                          id="solid-rounded-justified-tab1"
                        >
                          <div
                            style={{
                              fontSize: "13px",
                              marginTop: "-20px",
                              textAlign: "center",
                            }}
                          >
                            Seulement les médecins que vous sélectionnerez
                            seront invités.
                          </div>
                          <hr
                            className="divider"
                            style={{ width: "100%" }}
                          ></hr>
                          <DoctorSelectionForm />
                          <div className="row">
                            <div className="col-md-12">
                              <div className="card-box">
                                <Form layout="vertical">
                                  <div className="form-row">
                                    <Form.Item
                                      label="Date"
                                      className="form-item"
                                    >
                                      <DatePicker
                                        className="form-control"
                                        disabledDate={disabledDate}
                                      />
                                    </Form.Item>
                                    <Form.Item
                                      label="Heure"
                                      className="form-item"
                                    >
                                      <TimePicker
                                        className="form-control"
                                        use12Hours
                                        format="h:mm a"
                                        disabledHours={disabledHours}
                                      />
                                    </Form.Item>
                                  </div>
                                </Form>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          className="tab-pane"
                          id="solid-rounded-justified-tab2"
                        >
                          <div
                            style={{
                              fontSize: "13px",
                              marginTop: "-20px",
                              textAlign: "center",
                            }}
                          >
                            La discussion sera affichée aux médecins spécialisés
                            dont vous avez besoin. Ils peuvent demander à
                            rejoindre la discussion et vous pourrez les accepter
                            ou non.
                          </div>
                          <hr
                            className="divider"
                            style={{ width: "100%" }}
                          ></hr>
                          <div
                            className="col-md-12"
                            style={{ marginTop: "35px" }}
                          >
                            <label
                              className="col-md-10 col-form-label"
                              style={{ fontSize: "16px", marginBottom: "10px" }}
                            >
                              Choisissez les Spécialités:
                            </label>
                            <div className="form-group row">
                              <div className="col-md-12">
                                <Select
                                  isMulti
                                  defaultValue={selectedOptions}
                                  onChange={setSelectedOptions}
                                  options={Specialites}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12">
                              <div className="card-box">
                                <Form layout="vertical">
                                  <div className="form-row">
                                    <Form.Item
                                      label="Date"
                                      className="form-item"
                                    >
                                      <DatePicker
                                        className="form-control"
                                        disabledDate={disabledDate}
                                      />
                                    </Form.Item>
                                    <Form.Item
                                      label="Heure"
                                      className="form-item"
                                    >
                                      <TimePicker
                                        className="form-control"
                                        use12Hours
                                        format="h:mm a"
                                        disabledHours={disabledHours}
                                        disabledMinutes={() =>
                                          disabledMinutes(selectedHour)
                                        }
                                        onChange={(time) =>
                                          setSelectedHour(
                                            time ? time.hour() : null
                                          )
                                        }
                                      />
                                    </Form.Item>
                                  </div>
                                </Form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <form action="#">
                        <div className="text-end">
                          <button
                            id="suivant3"
                            type="button"
                            className="btn btn-primary"
                          >
                            Suivant
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                <div className="tab-pane" id="bottom-justified-tab4">
                  <div className="col-md-14 d-flex justify-content-center align-items-center">
                    <div className="card-box">
                      <div className="card-titles">
                        <h4
                          className="card-title"
                          style={{
                            marginBottom: "20px",
                            fontWeight: "bold",
                          }}
                        >
                          Consentement
                        </h4>
                        <h4
                          className="card-title"
                          style={{
                            marginBottom: "50px",
                            color: "#BDC0E3",
                            textAlign: "center",
                          }}
                        >
                          Lisez les conditions de la TéléExpertise et Acceptez.
                        </h4>
                      </div>
                      <div className="consent-component">
                        <div
                          className="consent-paragraph"
                          style={{
                            maxHeight: "350px",
                            maxWidth: "600px",
                            overflowY: "auto",
                            borderColor: "#2F38A3",
                            borderRadius: "10px",
                            padding: "15px",
                            border: "1px solid #2F38A3",
                            color: "#333",
                            fontSize: "14px",
                            lineHeight: "1.6",
                          }}
                        >
                          <span>
                            En soumettant ce formulaire, vous acceptez les
                            termes et conditions suivants:
                            <ol>
                              <li>
                                <strong>Objet du Consentement:</strong> Vous
                                consentez à ce que les informations que vous
                                fournissez soient utilisées dans le cadre de
                                votre consultation médicale et pour améliorer la
                                qualité des soins médicaux.
                              </li>
                              <li>
                                <strong>Confidentialité des Données:</strong>{" "}
                                Vos données personnelles seront traitées de
                                manière confidentielle et ne seront partagées
                                qu'avec les professionnels de santé impliqués
                                dans votre prise en charge.
                              </li>
                              <li>
                                <strong>Droits des Patients:</strong> Vous avez
                                le droit de demander l'accès, la rectification
                                ou la suppression de vos données personnelles à
                                tout moment. Vous pouvez également retirer votre
                                consentement sans que cela n'affecte la légalité
                                du traitement effectué avant le retrait.
                              </li>
                              <li>
                                <strong>Utilisation des Données:</strong> Vos
                                données peuvent être utilisées à des fins de
                                recherche médicale et de développement de
                                nouvelles thérapies, sous réserve de votre
                                anonymat.
                              </li>
                              <li>
                                <strong>Durée du Consentement:</strong> Ce
                                consentement est valable jusqu'à ce que vous
                                décidiez de le révoquer.
                              </li>
                            </ol>
                            <span
                              style={{ fontWeight: "bold", color: "#2F38A3" }}
                            >
                              En cochant la case ci-dessous, vous reconnaissez
                              avoir lu et compris les informations ci-dessus et
                              vous acceptez de participer à cette consultation
                              sous ces conditions.
                            </span>
                          </span>
                        </div>
                        <div
                          className="form-check"
                          style={{ marginTop: "25px" }}
                        >
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="consentCheckbox"
                            checked={isConsentChecked}
                            onChange={handleCheckboxChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="consentCheckbox"
                          >
                            J'accepte les termes et conditions.
                          </label>
                        </div>
                        <div className="text-end">
                          <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={!isConsentChecked}
                            style={{ marginTop: "20px" }}
                          >
                            Soumettre
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formulaire;
