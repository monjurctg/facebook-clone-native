import { View, Text, Image } from 'react-native'
import React from 'react'
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/AntDesign';

import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';



const Container = styled.View`
  flex: 1;
  background-color: white;
  margin-top: 20px;
  /* align-items: center; */
  /* justify-content: center; */
  /* margin-top:15; */
`;

const PostCardHeader = styled.View`
/* flex-direction:"row"; */
flex-direction:row;
align-items: center;
justify-content: space-between;

`;

const CardFooter = styled.View`
/* flex-direction:"row"; */
flex-direction:row;

justify-content: space-around;
padding: 10px 20px;
border-top: 2px solid green;

`;




export default function Post() {
    return (
        <Container>
            <PostCardHeader>
                <View style={{ flexDirection: "row", alignItems: "center", }}>
                    <Image source={{ uri: "https://scontent.fcgp7-1.fna.fbcdn.net/v/t1.6435-9/134474054_562081701414705_6742237731154046691_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHLrbu7QAYfjQA1TLIeQ6kQR51LdAPtO5BHnUt0A-07kMxGsO370vZyt6Ssh9lg90bbK4Oho9X4xGldy7mo_TMB&_nc_ohc=Mt_tPgKh1tMAX9H3n_f&_nc_ht=scontent.fcgp7-1.fna&oh=00_AT98XeIN8lmpmIV4RqzfX0OtfyDTQlqviAmw3sP45oPmLg&oe=62FA687E" }} style={{ height: 50, width: 50, borderRadius: 50, marginHorizontal: 15 }} />
                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>Monjur</Text>

                </View>
                <View style={{ flexDirection: "row", }}>
                    <Text style={{ fontSize: 18, fontWeight: "bold", marginHorizontal: 20 }}>...</Text>

                    <Text style={{ fontSize: 18, fontWeight: "bold", marginRight: 10 }}>X</Text>
                </View>


            </PostCardHeader>
            <Text style={{ fontSize: 16, padding: 20, fontWeight: '500' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia sit, debitis, numquam maiores eligendi possimus laudantium et enim dolore, facilis autem. At corporis neque dolor? Dolores quidem voluptate explicabo aliquid.</Text>
            <Image source={{ uri: "https://scontent.fcgp7-1.fna.fbcdn.net/v/t1.6435-9/134474054_562081701414705_6742237731154046691_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHLrbu7QAYfjQA1TLIeQ6kQR51LdAPtO5BHnUt0A-07kMxGsO370vZyt6Ssh9lg90bbK4Oho9X4xGldy7mo_TMB&_nc_ohc=Mt_tPgKh1tMAX9H3n_f&_nc_ht=scontent.fcgp7-1.fna&oh=00_AT98XeIN8lmpmIV4RqzfX0OtfyDTQlqviAmw3sP45oPmLg&oe=62FA687E" }} style={{ height: 500, width: 500, marginHorizontal: 15, marginBottom: 10 }} />

            <CardFooter>
                <View style={{ flexDirection: "row", }}>

                    <Icon name='like2' size={20} />
                    <Text style={{ marginHorizontal: 10 }}>Like</Text>
                </View>

                <View style={{ flexDirection: "row", }}>

                    <Icon2 name='comment-outline' size={20} />
                    <Text style={{ marginHorizontal: 10 }}>comment</Text>

                </View>

            </CardFooter>

        </Container>
    )
}