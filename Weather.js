import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";


const weatherOptions = {
    Haze: {
        iconName: "weather-hail",
        gradient: "#f05151",
        title: "Haze",
        subTitle: "여기는 설명이 들어가는 구간입니다."
    },
    Thunderstorm: {
        iconName: "weather-hail",
        gradient: "#f08451",
        title: "Thunderstorm",
        subTitle: "여기는 설명이 들어가는 구간입니다."
    },
    Drizzle: {
        iconName: "weather-hail",
        gradient: "#f0d051",
        title: "Drizzle",
        subTitle: "여기는 설명이 들어가는 구간입니다."
    },
    Rain: {
        iconName: "weather-hail",
        gradient: "#91f051",
        title: "Rain",
        subTitle: "여기는 설명이 들어가는 구간입니다."
    },
    Snow: {
        iconName: "weather-hail",
        gradient: "#51f08b",
        title: "Snow",
        subTitle: "여기는 설명이 들어가는 구간입니다."
    },
    Atmosphere: {
        iconName: "weather-hail",
        gradient: "#51c6f0",
        title: "Atmosphere",
        subTitle: "여기는 설명이 들어가는 구간입니다."
    },
    Clear: {
        iconName: "weather-hail",
        gradient: "#516ef0",
        title: "Clear",
        subTitle: "여기는 설명이 들어가는 구간입니다."
    },
    Clouds: {
        iconName: "weather-hail",
        gradient: "#8e51f0",
        title: "Clouds",
        subTitle: "여기는 설명이 들어가는 구간입니다."
    },
    Haze: {
        iconName: "weather-hail",
        gradient: "#db51f0",
        title: "Haze",
        subTitle: "여기는 설명이 들어가는 구간입니다."
    },
    Mist: {
        iconName: "weather-hail",
        gradient: "#f051db",
        title: "Mist",
        subTitle: "여기는 설명이 들어가는 구간입니다."
    },
    Dust: {
        iconName: "weather-hail",
        gradient: "#f0519b",
        title: "Dust",
        subTitle: "여기는 설명이 들어가는 구간입니다."
    },
    Smoke: {
        iconName: "weather-hail",
        gradient: "#912759",
        title: "Smoke",
        subTitle: "여기는 설명이 들어가는 구간입니다."
    },
    Fog: {
        iconName: "weather-hail",
        gradient: "#912788",
        title: "Fog",
        subTitle: "여기는 설명이 들어가는 구간입니다."
    },
    Sand: {
        iconName: "weather-hail",
        gradient: "#3a2791",
        title: "Sand",
        subTitle: "여기는 설명이 들어가는 구간입니다."
    },
    Ash: {
        iconName: "weather-hail",
        gradient: "#277391",
        title: "Ash",
        subTitle: "여기는 설명이 들어가는 구간입니다."
    },
    Squall: {
        iconName: "weather-hail",
        gradient: "#279188",
        title: "Squall",
        subTitle: "여기는 설명이 들어가는 구간입니다."
    },
    Tornado: {
        iconName: "weather-hail",
        gradient: "#916127",
        title: "Tornado",
        subTitle: "여기는 설명이 들어가는 구간입니다."
    }
}


export default function Weather({ temp, condition }) {
    return (
        <LinearGradient
            // Background Linear Gradient
            colors={['transparent', 'rgba(0,0,0,0.8)']}
            style={[styles.container, { backgroundColor: weatherOptions[condition].gradient }]}
        >

            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                {/* <MaterialCommunityIcons size={96} name="weather-lightning-rainy" color="white" /> */}
                <MaterialCommunityIcons size={96} name={weatherOptions[condition].iconName} color="white" />
                <Text style={styles.temp}>{temp}℃</Text>
            </View>
            <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subTitle}>{weatherOptions[condition].subTitle}</Text>
            </View>

        </LinearGradient>
    );
}

Weather.PropTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Atmosphere", "Clear", "Clouds", "Haze", "Mist", "Dust", "Smoke", "Fog", "Sand", "Ash", "Squall", "Tornado"]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 42,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10
    },
    subTitle: {
        color: "white",
        fontSize: 24,
        fontWeight: "600"
    },
    textContainer: {
        width: "100%",
        paddingHorizontal: 20,
        alignItems: "flex-start"
    }
});
