import { View, Text, TextInput, StyleSheet} from "react-native";

const Input = ({label}) => {
    return (
        <View>

        <Text style={styles.label}>{label}</Text>
          <TextInput
            style={styles.input}
            // onChangeText={onChangeNumber}
            // value={number}
            // placeholder="Placeholder"
            keyboardType="default"
            />
        </View>
      );
    };

const styles = StyleSheet.create({
    input: {
      height: 50,
    //   margin: 12,
      borderWidth:0,
      borderRadius:8,
      width:325,
      padding: 10,
      borderWidth:1,
  borderColor: "#FFE1E4",
  backgroundColor:"white"
   
    },
    label:{
        paddingVertical:"2%",
    }
  });

  export default Input;
  