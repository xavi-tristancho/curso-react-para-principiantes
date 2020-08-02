import React, { useState } from "react";
import styled from "styled-components";
import { Text, Card, Input } from "bluejay-ui";
import { Button } from "../ui";
import { ReactComponent as Save } from "../images/save.svg";
import request from "../utils/request";

const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;

  div {
    flex-basis: 30%;
  }
`;

const Profile = ({ user, updateUser }) => {
  const [nextUser, setNextUser] = useState(user);

  const updateUserState = ({ target: { name, value } }) =>
    setNextUser({ ...nextUser, [name]: value });

  const onSubmit = (e) => {
    e.preventDefault();

    request(`ApplicationUsers/${user.id}`, {
      method: "PATCH",
      body: JSON.stringify(nextUser),
    }).then(updateUser);
  };

  return (
    <>
      <Text as="span" color="default">
        EDITAR{" "}
        <Text as="b" style={{ fontSize: 25 }} color="black">
          Perfil
        </Text>
      </Text>
      <Card style={{ marginTop: 30, padding: "50px 100px" }}>
        <form onSubmit={onSubmit}>
          <Text style={{ fontSize: 18 }} color="black">
            Información personal
          </Text>
          <FormRow>
            <Input
              onChange={updateUserState}
              name="name"
              label="Nombre *"
              value={nextUser.name}
            />
            <Input
              onChange={updateUserState}
              name="firstName"
              label="Primer Apellido"
              value={nextUser.firstName}
            />
            <Input
              onChange={updateUserState}
              name="lastName"
              label="Segundo Apellido"
              value={nextUser.lastName}
            />
          </FormRow>
          <FormRow>
            <Input
              onChange={updateUserState}
              name="phone"
              label="Teléfono Móvil"
              value={nextUser.phone}
            />
            <Input
              onChange={updateUserState}
              name="dni"
              label="DNI /NIF *"
              value={nextUser.dni}
            />
            <Input
              onChange={updateUserState}
              name="email"
              label="Correo -Electrónico"
              disabled
              value={nextUser.email}
            />
          </FormRow>
          <Text style={{ fontSize: 18 }} color="black">
            Información de facturación
          </Text>
          <FormRow>
            <Input
              onChange={updateUserState}
              name="city"
              label="Ciudad *"
              value={nextUser.billingCity}
              required
            />
            <Input
              onChange={updateUserState}
              name="billingAddress"
              label="Dirección"
              value={nextUser.billingAddress}
            />
            <Input
              onChange={updateUserState}
              name="billingPostalCode"
              label="Código Postal"
              value={nextUser.billingPostalCode}
            />
          </FormRow>
          <FormRow>
            <Input
              onChange={updateUserState}
              name="irpf"
              label="IRPF (%)"
              value={nextUser.irpf}
              type="number"
            />
            <Input
              onChange={updateUserState}
              name="billingPaymentMethod"
              label="Método de pago"
              value={nextUser.billingPaymentMethod}
            />
          </FormRow>
          <Button
            color="primary"
            icon={Save}
            style={{ marginTop: 30, fontWeight: 600 }}
          >
            Guardar
          </Button>
        </form>
      </Card>
    </>
  );
};

export default Profile;
