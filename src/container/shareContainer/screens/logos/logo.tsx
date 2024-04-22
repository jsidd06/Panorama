/* eslint-disable react-hooks/exhaustive-deps */
import {
  Alert,
  Image,
  Platform,
  PermissionsAndroid,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ErrorComp, HeaderComp, LoadingComp, SearchComp} from '@/components';
import {useDispatch, useSelector} from 'react-redux';
import {COLORS} from '@/themes/Colors';
import {fetchLogosData} from '@/services/apis/apis';
import {setLogosData} from '@/redux/featuresSlice/allDataSlice';
import {FontSize, Layout, MetricsSizes} from '@/themes/style';
import RNFetchBlob from 'rn-fetch-blob';

const LogosScreen = () => {
  const dispatch = useDispatch();
  const store = useSelector((state: any) => state.data.logos);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('dog');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await fetchLogosData(search);
      setLoading(false);
      dispatch(setLogosData(data));
    } catch (err: any) {
      setLoading(false);
      setError(err);
    }
  };

  const checkPermission = async (image: any) => {
    if (Platform.OS === 'ios') {
      downloadImage();
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Storage Permission Required',
            message: 'App needs access to your storage to download Photos',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Storage Permission Granted.');
          downloadImage(image);
        } else {
          Alert.alert('Storage Permission Not Granted');
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };

  const downloadImage = (image: any) => {
    let date = new Date();
    let image_URL = image;
    let ext: any = getExtention(image_URL);
    ext = '.' + ext[0];
    const {config, fs} = RNFetchBlob;
    let PictureDir = fs.dirs.PictureDir;
    let options = {
      fileCache: true,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        path:
          PictureDir +
          '/image_' +
          Math.floor(date.getTime() + date.getSeconds() / 2) +
          ext,
        description: 'Image',
      },
    };
    config(options)
      .fetch('GET', image_URL)
      .then(res => {
        console.log('res -> ', JSON.stringify(res));
        Alert.alert('Image Downloaded Successfully.');
      });
  };

  const getExtention = filename => {
    return /[.]/.exec(filename) ? /[^.]+$/.exec(filename) : undefined;
  };

  return loading ? (
    <LoadingComp />
  ) : error ? (
    <ErrorComp message={error} />
  ) : (
    <View style={[Layout.fill, styles.root]}>
      <HeaderComp title="Find logo" white />
      <View style={[styles.subRoot]}>
        <SearchComp
          placeholderTextColor={COLORS.BLACK}
          onPress={fetchData}
          onChangeText={(text: any) => setSearch(text)}
          value={search}
        />
        <ScrollView>
          <View style={[styles.container]}>
            {store?.length > 0 ? (
              store?.map((d: any, i: number) => (
                <View key={i} style={styles.subCont}>
                  <View style={[Layout.alignCenter]}>
                    <Image style={styles.img} source={{uri: d.image}} />
                  </View>
                  <View style={[styles.subContent]}>
                    <View style={[Layout.rowACenter]}>
                      <Text style={styles.heading}>Name:-</Text>
                      <Text style={styles.subHeading}> {d.name}</Text>
                    </View>
                    <View style={[Layout.rowACenter]}>
                      <Text style={styles.heading}>Ticker:-</Text>
                      <Text style={styles.subHeading}> {d.ticker}</Text>
                    </View>
                    <View style={[Layout.rowACenter]}>
                      <Text style={styles.heading}>Download logo:-</Text>
                      <Pressable onPress={() => checkPermission(d.image)}>
                        <Text style={styles.subHeading}> download now </Text>
                      </Pressable>
                    </View>
                  </View>
                </View>
              ))
            ) : (
              <Text style={[styles.error]}>No Logo found</Text>
            )}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default LogosScreen;

const styles = StyleSheet.create({
  root: {
    backgroundColor: COLORS.BRINJAL,
  },
  subRoot: {
    marginHorizontal: MetricsSizes.MEDIUM,
  },
  container: {
    backgroundColor: COLORS.LIGHT_WHITE,
    borderRadius: 8,
  },
  subCont: {
    paddingVertical: MetricsSizes.SMALL,
  },
  subContent: {
    paddingHorizontal: MetricsSizes.MEDIUM,
    paddingVertical: MetricsSizes.MEDIUM,
  },
  heading: {
    fontSize: FontSize.md,
    color: COLORS.BLACK,
    fontWeight: '600',
  },
  subHeading: {
    fontSize: FontSize.md,
    color: COLORS.BLACK,
    fontWeight: '500',
  },
  img: {
    width: MetricsSizes.SET150,
    height: MetricsSizes.SET150,
    resizeMode: 'contain',
  },
  error: {
    paddingHorizontal: MetricsSizes.MEDIUM,
    fontSize: FontSize.md,
    color: COLORS.BLACK,
    fontWeight: '600',
  },
  button: {
    width: '70%',
    padding: 10,
    backgroundColor: '#00BFFF',
    margin: 10,
    height: 50,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    padding: 5,
  },
});
