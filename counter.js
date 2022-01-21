import React, { useState } from "react";
import { Button, Text, View } from "react-native";

const contar = () => {
    const [count, setCount] = useState(0);
    return(
        <View>
            <Text>

                You cliked {count} times

            </Text>

            <Button onPress={() =>
                { 
                    setCount(count + 1) ;
                }}
                    style={{
                        height: 10,
                        borderColor: 'blue',
                        borderWidth: 1}}
                        > 
                            Click Me
            </Button>
        </View>
    );
}

export default contar;