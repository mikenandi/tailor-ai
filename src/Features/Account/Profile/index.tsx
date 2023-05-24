import React from "react";
import { StyleSheet } from "react-native";
import Color from "../../../Components/Color";
import { Name } from "./Name";
import { Gender } from "./Gender";
import { Birthdate } from "./Birthdate";
import { Email } from "./Email";
import { Phone } from "./Phone";
import { Password } from "./Password";

function Profile(props: any) {
    return (
        <>
            <Name />

            <Gender />

            <Birthdate />

            <Email />

            <Phone />

            <Password />
        </>
    );
}

const styles = StyleSheet.create({});

export { Profile };
