import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    TextInput,
    Image,
    Dimensions,
    SafeAreaView,
    StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ProductDetailsScreen from './ProductDetailsScreen';

const { width } = Dimensions.get('window');

const CheckoutProfileScreen = ({ navigation }) => {
    const handleBack = () => {
        navigation.navigation('ProductDetailsScreen');
    };



    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />

            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={handleBack}>
                    <Image
                        source={require('../../assets/icons/BackStepIcon.png')}
                    />
                </TouchableOpacity >
                <Text style={styles.headerTitle}>Checkout</Text>
                <View style={styles.headerRight} />
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                {/* Profile Image */}
                <View style={styles.profileImageContainer}>
                    <Image
                        source={require('../../assets/images/womanicon.png')}
                        style={styles.profileImage}
                    />
                    <View style={styles.verifiedBadge}>
                        <MaterialIcons name="verified" size={16} color="#1DA1F2" />
                    </View>
                </View>

                {/* Personal Details Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Personal Details</Text>

                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>Email Address</Text>
                        <TextInput
                            style={styles.input}
                            value="aashifa@gmail.com"
                            keyboardType="email-address"
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>Password</Text>
                        <TextInput
                            style={styles.input}
                            secureTextEntry
                            value="••••••••••"
                        />
                        <TouchableOpacity style={styles.changePasswordButton}>
                            <Text style={styles.changePasswordText}>Change Password</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Business Address Details */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Business Address Details</Text>

                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>Pincode</Text>
                        <TextInput
                            style={styles.input}
                            value="450116"
                            keyboardType="numeric"
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>Address</Text>
                        <TextInput
                            style={styles.input}
                            value="216 St Paul's Rd,"
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>City</Text>
                        <TextInput
                            style={styles.input}
                            value="London"
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>State</Text>
                        <TouchableOpacity style={styles.dropdownInput}>
                            <Text style={styles.dropdownText}>N1 2LL</Text>
                            <MaterialIcons name="keyboard-arrow-down" size={24} color="#000" />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>Country</Text>
                        <TextInput
                            style={styles.input}
                            value="United Kingdom"
                        />
                    </View>
                </View>

                {/* Bank Account Details */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Bank Account Details</Text>

                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>Bank Account Number</Text>
                        <TextInput
                            style={styles.input}
                            value="204356XXXXXXX"
                            keyboardType="numeric"
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>Account Holder's Name</Text>
                        <TextInput
                            style={styles.input}
                            value="Abhiraj Sisodiya"
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>IFSC Code</Text>
                        <TextInput
                            style={styles.input}
                            value="SBIN0042B"
                        />
                    </View>
                </View>

                {/* Save Button */}
                <TouchableOpacity style={styles.saveButton}>
                    <Text style={styles.saveButtonText}>Save</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#F5F5F5',
    },
    headerTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000',
    },
    headerRight: {
        width: 24,
    },
    scrollContent: {
        paddingBottom: 30,
    },
    profileImageContainer: {
        alignItems: 'center',
        marginTop: 20,
        position: 'relative',
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#FF6B6B',
    },
    verifiedBadge: {
        position: 'absolute',
        right: width * 0.38,
        bottom: 0,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 2,
    },
    section: {
        paddingHorizontal: 16,
        marginTop: 24,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000',
        marginBottom: 16,
    },
    inputContainer: {
        marginBottom: 16,
    },
    inputLabel: {
        fontSize: 14,
        color: '#666',
        marginBottom: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: '#E8E8E8',
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 12,
        fontSize: 14,
        color: '#000',
    },
    dropdownInput: {
        borderWidth: 1,
        borderColor: '#E8E8E8',
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 12,
        fontSize: 14,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    dropdownText: {
        fontSize: 14,
        color: '#000',
    },
    changePasswordButton: {
        position: 'absolute',
        right: 16,
        top: 45,
    },
    changePasswordText: {
        fontSize: 12,
        color: '#FF4081',
    },
    saveButton: {
        backgroundColor: '#FF4081',
        marginHorizontal: 16,
        marginTop: 24,
        paddingVertical: 16,
        borderRadius: 8,
        alignItems: 'center',
    },
    saveButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default CheckoutProfileScreen; 