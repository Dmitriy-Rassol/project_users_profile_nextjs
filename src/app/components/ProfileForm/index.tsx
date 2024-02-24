"use client";

import React, { useEffect, useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input/input";
// import { Textarea } from "../Input/textarea";
import { User } from "@/interfaces/user.interface";
import { IFormData } from "@/interfaces/editProfile.interface";
import "./profileform.scss";
import { Textarea } from "../Input/textarea";

interface IProps {
  user: User;
  isActive: boolean;
}

export const ProfileForm = ({ user, isActive }: IProps): JSX.Element => {
    
    const [errors, setErrors] = useState<object>({});
 
    const defaultFormdata: IFormData = {
        name: user.name,
        username: user.username,
        email: user.email,
        street: user.address?.street || "", 
        city: user.address?.city || "", 
        zipcode: user.address?.zipcode || "",
        phone: user.phone,
        website: user.website,
        comment: "",
    };

  const [formdata, setFormdata] = useState<IFormData>(defaultFormdata);
  const onInputChange = (key: string, val: string, err?: boolean) => {
    setFormdata({ ...formdata, ...{ [key]: val } })
    if(err) {
        setErrors({...errors, ...{[key]: true}})
    } else {
        setErrors({...errors, ...{[key]: false}})
    }
  };

  useEffect(() => {
    console.log('errors', errors);
    console.log(defaultFormdata);
    
  }, [errors])
  return (
    <div className="profile-wrapper">
      <Input
        type="text"
        label="Name"
        name="name"
        defaultValue={defaultFormdata.name}
        placeholder="Name"
        handleChange={onInputChange}
        disabled={!isActive}
      />
      <Input
        type="text"
        label="User name"
        name="username"
        defaultValue={defaultFormdata.username}
        placeholder="User name"
        handleChange={onInputChange}
        disabled={!isActive}
      />
      <Input
        type="text"
        label="Email"
        name="email"
        defaultValue={defaultFormdata.email}
        placeholder="Email"
        handleChange={onInputChange}
        disabled={!isActive}
      />
      <Input
        type="text"
        label="Street"
        name="name"
        defaultValue={defaultFormdata.street}
        placeholder="Street"
        handleChange={onInputChange}
        disabled={!isActive}
      />
      <Input
        type="text"
        label="City"
        name="city"
        defaultValue={defaultFormdata.city}
        placeholder="City"
        handleChange={onInputChange}
        disabled={!isActive}
      />
      <Input
        type="text"
        label="Zip code"
        name="zipcode"
        defaultValue={defaultFormdata.zipcode}
        placeholder="Zip code"
        handleChange={onInputChange}
        disabled={!isActive}
      />
      <Input
        type="text"
        label="Phone"
        name="phone"
        defaultValue={defaultFormdata.phone}
        placeholder="Phone"
        handleChange={onInputChange}
        disabled={!isActive}
      />
      <Input
        type="text"
        label="Website"
        name="website"
        defaultValue={defaultFormdata.website}
        placeholder="Website"
        handleChange={onInputChange}
        disabled={!isActive}
      />
      <Textarea
        label="Comment"
        name="comment"
        defaultValue={defaultFormdata.comment}
        handleChange={onInputChange}
        disabled={!isActive} placeholder={""}      />
      <div className="align-right">
        <Button
          className="secondary-button"
          // @ts-ignore
          disabled={!isActive || Object.keys(errors).map((key: any) => errors[key] === true).some(el => el === true)}
          handleClick={() => console.log("formdata", formdata)}
        >
          Отправить
        </Button>
      </div>
    </div>
  );
};
