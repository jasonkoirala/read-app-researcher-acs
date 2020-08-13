import React from "react";
import "./App.css";
import { patientInfo } from "./patientInfo";

export const Patient = () => {
  return (
    <>
      <HomePageHeader />
      <div className="stock-container">
      <table>
      <tbody>
        <tr>
          <td>
            <h5>patient_id</h5>
          </td>
          <td>
            <h5>first_name</h5>
          </td>
          <td>
            <h4>last_name</h4>
          </td>
          <td>
            <p>admitted_date</p>
          </td>
          <td>
            <p>department_name</p>
          </td>
          <td>
            <p>doctor_name</p>
          </td>
        </tr>
      </tbody>
    </table>
        {patientInfo.map((data, key) => {
          return (
            <div key={key}>
              <Patients
                key={key}
                patient_id={data.patient_id}
                first_name={data.first_name}
                last_name={data.last_name}
                admitted_date={data.admitted_date}
                department_name={data.department_name}
                doctor_name={data.doctor_name}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

const HomePageHeader = () => {
  return (
    <header className="header">
      <h2>Researcher Info</h2>
    </header>
  );
};

const Patients = ({ patient_id, first_name, last_name, admitted_date, department_name, doctor_name}) => {
  if (!patient_id) return <div />;
  return (
    
    <table>
      <tbody>
        <tr>
          <td>
            <h5>{patient_id}</h5>
          </td>
          <td>
            <h5>{first_name}</h5>
          </td>
          <td>
            <h4>{last_name}</h4>
          </td>
          <td>
            <p>{admitted_date}</p>
          </td>
          <td>
            <p>{department_name}</p>
          </td>
          <td>
            <p>{doctor_name}</p>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
