import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';
import styled from "styled-components/native";
import {useState} from "react";

const NativeStyled = () => {
  return (
      <View style={styles.styledView}>
        <View style={styles.styledView}>
          <View style={styles.styledView}>
            <View style={styles.styledView}>
              <View style={styles.styledView}>
                <View style={styles.styledView}>
                  <View style={styles.styledView}>
                    <View style={styles.styledView}>
                      <View style={styles.styledView}>
                        <View style={styles.styledView}>
                          <View style={styles.styledView}>
                            <View style={styles.styledView}>
                              <View style={styles.styledView}>
                                <View style={styles.styledView}>
                                  <View style={styles.styledView}>
                                  </View>
                                </View>
                              </View>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
  );
}

const StyledComponentsView = () => {
  return (
    <StyledView>
      <StyledView>
        <StyledView>
          <StyledView>
            <StyledView>
              <StyledView>
                <StyledView>
                  <StyledView>
                    <StyledView>
                      <StyledView>
                        <StyledView>
                          <StyledView>
                            <StyledView>
                              <StyledView>
                                <StyledView>
                                </StyledView>
                              </StyledView>
                            </StyledView>
                          </StyledView>
                        </StyledView>
                      </StyledView>
                    </StyledView>
                  </StyledView>
                </StyledView>
              </StyledView>
            </StyledView>
          </StyledView>
        </StyledView>
      </StyledView>
    </StyledView>
  )
}

export default function App() {

  const [version, setVersion] = useState('styled')

  const onVersionPress = () => {
    setVersion((v) => v === 'styled' ? 'native' : 'styled')
  }

  return (
      <View style={styles.container}>
        <Button title={`Switch to ${version === 'styled' ? 'native' : 'styled'}`} onPress={onVersionPress} />
        <Text>Rendering with {
            version === 'styled' ? 'styled-components' : 'native styles'
        }</Text>
        {
            version === 'styled' ? <StyledComponentsView /> : <NativeStyled />
        }
      </View>
  )
}

const StyledView = styled.View`
  border-color: red;
  border-width: 2px;
  padding: 5px;
`

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  styledView: {
    borderColor: "red",
    borderWidth: 2,
    padding: 5
  }
});
