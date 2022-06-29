import React, {useState} from "react";
import { View, SafeAreaView, FlatList } from "react-native";

import { NFTCard, HomeHeader, FocusedStatusBar } from "../components";
import { COLORS, NFTData } from "../constants";

const Home = () => {
     const [nftData, setNftData] = useState(NFTData);
    return (
        <View>Home Page </View>        
    )
}
export default Home;
