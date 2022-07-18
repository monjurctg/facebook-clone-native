import { StyleSheet, Dimensions } from 'react-native'
var widthpercent = Dimensions.get('window').width;
// var height = Dimensions.get('window').height;


export const styles = StyleSheet.create({
    container: {
        flex: 1,


        // justifyContent: "center",
        // alignItems: "center",
        // alignContent: "center
    },
    topBarContainer: {
        flexDirection: 'row',
        backgroundColor: "white",
        justifyContent: 'space-between'

    },

    logo: {
        height: 80,
        width: 200

    },

    // app bar 

    appBarContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: "white",
        paddingVertical: 15,
        paddingHorizontal: 10


    }
    ,
    h1: {
        fontSize: 50,
        fontWeight: "500",
        margin: 20

    },
    p: {
        textAlign: "center",
        width: 400,
        fontSize: 16,
        color: "#707070",
        marginTop: 10,
        marginBottom: 20

    }
    ,
    aboutImage: {
        height: 400,
        width: 300
    },
    card: {
        minHeight: 300,
        width: 200,
        backgroundColor: "#f9f9fd",
        shadowColor: 'gray',
        shadowOffset: { width: -12, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        borderRadius: 15,
        alignItems: "center",

        marginTop: 10,
        marginHorizontal: 10,

    },


    h3: {
        fontSize: 30,
        fontWeight: "500",
        marginTop: 20

    }




});

