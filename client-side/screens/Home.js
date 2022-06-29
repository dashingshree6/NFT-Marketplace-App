import React, {useState} from "react";
import { View, SafeAreaView, FlatList } from "react-native";

import { NFTCard, HomeHeader, FocusedStatusBar } from "../components";
import { COLORS, NFTData } from "../constants";

const Home = () => {
     const [nftData, setNftData] = useState(NFTData);
     
     const handleSearch = (value) => {
        if (value.length === 0) {
        setNftData(NFTData);
     }
          
     const filteredData = NFTData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
     
          
    return (
        <View>Home Page </View>        
    )
}
export default Home;
