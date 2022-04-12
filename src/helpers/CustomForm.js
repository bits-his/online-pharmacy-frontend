import React from "react";
import { Row, Col, Label } from "reactstrap";
import Checkbox from "./CheckBox";
import RadioGroup from "./RadioGroup";
import SelectInput from "./SelectInput";
import TextInput from "./TextInput";
// import TextInput from "./TextInput";

function CustomForm({
  fields = [],
  handleChange = (f) => f,
  handleRadioChange = (f) => f,
}) {
  return (
    <Row className="m-0">
      {fields.map((el, i) => {
        if (el.type && el.type === "select") {
          return (
            <Col
              md={{ size: el.col || 4, offset: el.offset || "" }}
              key={i}
              className="px-1"
            >
              <SelectInput
                label={el.label}
                name={el.name}
                value={el.value}
                options={el.options || []}
                required={el.required}
                disabled={el.disabled}
                onChange={el.handleChange ? el.handleChange : handleChange}
              />
            </Col>
          );
        } else if (el.type === "label") {
          return (
            <Col
              className={el.container}
              md={{ size: el.col || 4, offset: el.offset || "" }}
              key={i}
            >
              <Label className="mr-1 font-weight-bold mt-4">{el.label}</Label>
              <Label>{el.value}</Label>
              <Label>{el.name}</Label>
            </Col>
          );
        } else if (el.type && el.type === "radio") {
          return (
            <Col
              md={{ size: el.col || 4, offset: el.offset || "" }}
              key={i}
              className="px-1"
            >
              <RadioGroup
                container="d-flex flex-row"
                label={el.label}
                name={el.name}
                options={el.options}
                onChange={handleRadioChange}
                value={el.value}
              />
            </Col>
          );
        } else if (el.type && el.type === "checkbox") {
          return (
            <Col
              md={{ size: el.col || 4, offset: el.offset || "" }}
              key={i}
              className="px-1"
            >
              <Checkbox
                container="d-flex flex-row"
                label={el.label}
                name={el.name}
                options={el.options}
                onChange={handleRadioChange}
                value={el.value}
                // checked={el.name}
              />
            </Col>
          );
        } else if (el.type && el.type === "custom") {
          return (
            <Col
              className={el.container}
              md={{ size: el.col || 4, offset: el.offset || "" }}
              key={i}
            >
              {el.component()}
            </Col>
          );
        } else if (el.type === null) {
          return null;
        } else if (el.type === "switch") {
          return <input type="hidden" name={el.name} value={el.value} />;
        } else {
          return (
            <Col
              md={{ size: el.col || 4, offset: el.offset || "" }}
              key={i}
              className="px-1"
            >
              <TextInput
                label={el.label}
                type={el.type || "text"}
                name={el.name}
                placeholder={el.placeholder}
                value={el.value}
                required={el.required}
                disabled={el.disabled}
                onChange={el.handleChange ? el.handleChange : handleChange}
              />
            </Col>
          );
        }
      })}
    </Row>
  );
}

export default CustomForm;
