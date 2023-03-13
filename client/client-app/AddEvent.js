import { View, SafeAreaView, Pressable, Text, TextInput, StyleSheet } from "react-native";
import { styles, textStyles, Colors } from "./styles";
const AddEvent = () => {
    return (
        <SafeAreaView style={styles.eventScreenContainer}>
        <View>
          <View style={styles.screenHeader}>
            <Text style={textStyles.h1}>
              {'Create Event'}
            </Text>
          </View>
          <View style={styles.headerSeperator}>
            
          </View>
        </View>
        <View style={addEventStyles.addEventContainer}>
            <View style={addEventStyles.textEntryContainerMain}>
                <TextInput placeholder="Event Name" style={addEventStyles.textEntryFont}></TextInput>
            </View>
            <View style={addEventStyles.textEntryContainerMain}>
                <Pressable>
                    <Text style={addEventStyles.textEntryFont}>Select Location</Text>
                </Pressable>
            </View>
            <View style={addEventStyles.textEntryContainerMain}>
                <Pressable>
                <Text style={addEventStyles.textEntryFont}>Select Date & Time</Text>
                </Pressable>
            </View>
            <View style={addEventStyles.textEntryContainerSecondary}>
                <TextInput placeholder="Description" style={[addEventStyles.textEntryFont]}></TextInput>
            </View>
            <View style={addEventStyles.textEntryContainerMain}>
                <Pressable>
                <Text style={addEventStyles.textEntryFont}>Add Image</Text>
                </Pressable>
            </View>
            <View style={addEventStyles.createButton}>
                <Pressable>
                    <Text style={addEventStyles.createText}>
                        Create
                    </Text>
                </Pressable>

            </View>
        </View>
      </SafeAreaView>
    );
}

export default AddEvent;

const addEventStyles = StyleSheet.create({
    addEventContainer: {
        flex: .88,
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: 15
    },
    textEntryContainerMain: {
        width: 300,
        height: 35,
        backgroundColor: Colors.inputBg,
        marginBottom: 15
    },
    textEntryFont: {
        fontSize: 20,
        marginTop: 5,
        marginLeft: 5
    },
    textEntryContainerSecondary: {
        width: 300,
        height: 260,
        backgroundColor: Colors.inputBg,
        marginBottom: 15
    },
    createButton: {
        backgroundColor: Colors.green,
        height: 75,
        width: 300,
        borderRadius: 10,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    createText: {
        color: 'white',
        fontSize: 25,
        fontWeight: '500',
    }
});
