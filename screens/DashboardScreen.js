import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DashboardScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');

    useEffect(() => {
        const fetchUsername = async () => {
            const storedUsername = await AsyncStorage.getItem('@username');
            if (storedUsername) {
                setUsername(storedUsername);
            }
        };
        fetchUsername();
    }, []);

    const handleLogout = async () => {
        await AsyncStorage.clear();
        navigation.navigate('LoginScreen');
    };

    // Sample quick pick songs (replace with API data if needed)
    const songs = [
        { id: '1', title: 'If I Ever Fall in Love Again', artist: 'Kenny Rogers', plays: '127M plays', image: require('../src/assets/images/1.jpg') },
        { id: '2', title: 'Without You', artist: 'Air Supply', plays: '202K plays', image: 'https://via.placeholder.com/50' },
        { id: '3', title: 'Lupit Ng Pag-Ibig', artist: 'Vanessa', plays: '3.5M plays', image: 'https://via.placeholder.com/50' },
    ];

    return (
        <View style={styles.container}>
            {/* Header Section */}
            <Text style={styles.welcomeText}>Welcome, {username}!</Text>

            {/* Playlist Recommendation Section */}
            <View style={styles.playlistContainer}>
                <Text style={styles.playlistTitle}>Try the perfect playlist, made just for you</Text>
                <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.playlistImage} />
            </View>

            {/* Quick Picks Section */}
            <Text style={styles.sectionTitle}>Quick Picks</Text>
            <FlatList
                data={songs}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.songItem}>
                        <Image source={item.image} style={styles.songImage} />
                        <View style={styles.songDetails}>
                            <Text style={styles.songTitle}>{item.title}</Text>
                            <Text style={styles.songArtist}>{item.artist}</Text>
                            <Text style={styles.songPlays}>{item.plays}</Text>
                        </View>
                    </View>
                )}
            />


            {/* Bottom Navigation */}
            <View style={styles.bottomNav}>
                <TouchableOpacity onPress={() => navigation.navigate('DashboardScreen')}>
                    <Text style={styles.navItem}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('SampleScreen')}>
                    <Text style={styles.navItem}>Samples</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('ExploreScreen')}>
                    <Text style={styles.navItem}>Explore</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('LibraryScreen')}>
                    <Text style={styles.navItem}>Library</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('UpgradeScreen')}>
                    <Text style={styles.navItem}>Upgrade</Text>
                </TouchableOpacity>
            </View>

            {/* Logout Button */}
            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#121212', padding: 20 },
    welcomeText: { fontSize: 20, color: '#fff', fontWeight: 'bold', marginBottom: 10 },
    playlistContainer: { backgroundColor: '#222', padding: 15, borderRadius: 10, marginBottom: 20 },
    playlistTitle: { color: '#fff', fontSize: 16, marginBottom: 10 },
    playlistImage: { width: '100%', height: 120, borderRadius: 10 },
    sectionTitle: { fontSize: 18, color: '#fff', marginBottom: 10 },
    songItem: { flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
    songImage: { width: 50, height: 50, borderRadius: 8, marginRight: 10 },
    songDetails: { flex: 1 },
    songTitle: { color: '#fff', fontSize: 16 },
    songArtist: { color: '#bbb', fontSize: 14 },
    songPlays: { color: '#777', fontSize: 12 },
    bottomNav: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10, borderTopWidth: 1, borderTopColor: '#444' },
    navItem: { color: '#bbb', fontSize: 14 },
    logoutButton: { backgroundColor: '#ff4444', padding: 12, borderRadius: 8, marginTop: 20, alignItems: 'center' },
    logoutText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});

export default DashboardScreen;
