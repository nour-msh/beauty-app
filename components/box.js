import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet,View } from 'react-native';


const Box= () => {
    return(
        <>
        <LinearGradient colors={['#FFA4AE' ,'#FFA4AE', '#FFA4AE', '#FFA4AE']} style={styles.box}>
        <View>
        </View>
        </LinearGradient>
        </>
        )
};

const styles = StyleSheet.create({

    box:{
        height:175,
        width:375,
    borderBottomRightRadius:50,
    borderBottomLeftRadius:50
        },
}
    )

    export default Box