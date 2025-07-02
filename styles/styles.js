import { StyleSheet, Dimensions, Platform } from 'react-native';
import Constants from 'expo-constants';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fa',
  },
  header: {
    backgroundColor: '#fff',
    // 플랫폼별 다른 paddingTop 적용
    paddingTop: Platform.OS === 'web' ? 40 : Constants.statusBarHeight + 40,
    paddingHorizontal: 20,
    paddingBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  headerTitle: {
    fontSize: Platform.OS === 'web' ? 26 : 28,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: 15,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 15,
    height: Platform.OS === 'web' ? 50 : 45,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#34495e',
    marginLeft: 10,
    // 웹에서 아웃라인 제거
    ...(Platform.OS === 'web' && { outline: 'none' }),
  },
  quickAccessContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  quickAccessButton: {
    backgroundColor: '#3498db',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    transform: [{ scale: 1 }],
  },
  quickAccessButtonPressed: {
    backgroundColor: '#2980b9',
    transform: [{ scale: 0.95 }],
  },
  quickAccessText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 5,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginHorizontal: Platform.OS === 'web' ? 20 : 20,
    marginTop: Platform.OS === 'web' ? 15 : 20,
    borderRadius: 15,
    padding: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  tab: {
    flex: 1,
    paddingVertical: Platform.OS === 'web' ? 15 : 12,
    alignItems: 'center',
    borderRadius: 10,
  },
  activeTab: {
    backgroundColor: '#3498db',
  },
  inactiveTab: {
    backgroundColor: 'transparent',
  },
  tabText: {
    fontSize: Platform.OS === 'web' ? 15 : 16,
    fontWeight: '600',
  },
  activeTabText: {
    color: '#fff',
  },
  inactiveTabText: {
    color: '#7f8c8d',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'web' ? 15 : 20,
  },
  cardContainer: {
    marginBottom: Platform.OS === 'web' ? 12 : 15,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: Platform.OS === 'web' ? 18 : 20,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
    transform: [{ scale: 1 }],
  },
  cardPressed: {
    backgroundColor: '#f8f9fa',
    transform: [{ scale: 0.98 }],
  },
  cardIconContainer: {
    width: Platform.OS === 'web' ? 55 : 60,
    height: Platform.OS === 'web' ? 55 : 60,
    borderRadius: Platform.OS === 'web' ? 27.5 : 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  cardIcon: {
    transform: [{ scale: 1 }],
  },
  cardIconPressed: {
    transform: [{ scale: 1.1 }],
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: Platform.OS === 'web' ? 17 : 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: Platform.OS === 'web' ? 13 : 14,
    color: '#7f8c8d',
    lineHeight: Platform.OS === 'web' ? 18 : 20,
  },
  // 각 카드별 아이콘 배경색
  disasterIcon: {
    backgroundColor: '#ff6b6b20',
  },
  safetyIcon: {
    backgroundColor: '#4ecdc420',
  },
  facilityIcon: {
    backgroundColor: '#45b74920',
  },
  ethicsIcon: {
    backgroundColor: '#9b59b620',
  },
  emotionalIcon: {
    backgroundColor: '#f39c1220',
  },
  humanrightsIcon: {
    backgroundColor: '#3498db20',
  },
  footerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Platform.OS === 'web' ? 8 : 10,
    backgroundColor: '#fff',
  },
  companyLogo: {
    width: Platform.OS === 'web' ? 180 : 180,
    height: Platform.OS === 'web' ? 70 : 90,
    alignSelf: 'center',
    marginTop: 1,
    marginBottom: Platform.OS === 'web' ? 10 : 30,
  },
});