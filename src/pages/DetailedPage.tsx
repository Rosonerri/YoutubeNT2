import React from 'react'
import { VscVerifiedFilled } from "react-icons/vsc"
import { AiOutlineBell, AiFillLike } from "react-icons/ai"
import { FaAngleDown } from "react-icons/fa"
import { GiSelfLove } from "react-icons/gi"
import { BsThreeDots } from "react-icons/bs"
import { BiDislike } from "react-icons/bi"
import img from "../assets/passport.jpg"
import { FaShare } from "react-icons/fa"
import {getDetails} from "../api/API"
import styled from "styled-components"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
const DetailedPage = () => {

  const { id } = useParams();

  const [state, setState]: any = useState<{}>()
  
  useEffect(() => {
    getDetails(id!).then((res: any) => {
      setState(res)
    })
  }, [])
  return (
    <div>
      <Container>
        <Main>
          <Screen src={`https://youtube.com/embed/${id}`}/>
          <Bottom>
            <Title>The Never Told Story about the daughters of adam and eve</Title>
            <SubBotom>
              <Div2>
                <Avatar src={img} />
                <Div>
                  <Sub>
                    <Desc>{state?.channelTitle}</Desc>
                    <VscVerifiedFilled />
                  </Sub>
                  <Scribe>114 Subscribers</Scribe>
                </Div>
                <Subscribed2>
                  <AiOutlineBell />
                  <Text>Subscribed</Text>
                  <FaAngleDown />
                </Subscribed2>

                <Subscribed3>
                  <AiFillLike />
                  <Text>18k</Text>
                  <Line />
                  <BiDislike />
                </Subscribed3>
              </Div2>

              <Subscribed4>
                <FaShare />
                <Text>Share</Text>
              </Subscribed4>

              <Subscribed>
                <GiSelfLove />
                <Text>Thanks</Text>
              </Subscribed>

              <Subscribed1>
                <BsThreeDots />
              </Subscribed1>
            </SubBotom>
            <MainP>
            <Practice  mg= "" bc="#f2f2f2" br="50%" fs="" wd="70px" ht="70px" >
        
        </Practice>
        <Practice mg="0px 10px" bc="#f2f2f2" br="20px" fs="23px" wd="200px" ht="40px" >
        <VscVerifiedFilled />
          <p>Verifield</p>
          <GiSelfLove />
        </Practice>
        <Practice  bc="#f2f2f2" br="20px" fs="" wd="120px" ht="50px" mg="0px 10px 0px 10px" >
        <FaShare />
        <p>Shared</p>
        </Practice>
        <Practice  bc="#f2f2f2" br="20px" fs="" wd="120px" ht="50px" mg="0px 10px 0px 10px" >
        <AiFillLike />
        <p>Like</p>
        </Practice>
        </MainP>
          </Bottom>
        </Main>
        <MainView>
          <View />
          <Content>
            <Title>
              THE NEVER TOLD STORY ABOUT THE DAUGHTERS OF ADAM AND EVE
            </Title>
            <ChannelName>Rush TV</ChannelName>
            <Views>
              <Detail>2.4m views</Detail>
              <Dot />
              <Detail>a minute ago</Detail>
            </Views>
          </Content>
        </MainView>
        
      </Container>
    </div>
  )
}

export default DetailedPage
const MainP = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;

`
// const Subs = styled.div`
// display: flex;
// padding: 5px 10px;
// /* margin-left: 10px; */
// background-color: #f2f2f2;
// align-items: center;
// justify-content: center;
// font-size: 20px;
// border-radius: 25px;
// cursor: pointer;  
// `
const Practice = styled.div<{mg: string, bc: string, br: string, fs: string, wd: string, ht: string}>`
margin: ${({mg}) => (mg)};
background-color: ${({bc})=>(bc)};
border-radius: ${({br})=>(br)};
font-size: ${({fs})=>(fs)};
width: ${({wd})=>(wd)};
height: ${({ht})=>(ht)};
display: inline-block;
 display: flex;
justify-content: center;
align-items: center;
p{
  font-weight: 700;
  margin: 0px 5px 0px 5px;
}
`
const Dot = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 50px;
  background-color: black;
  margin: 0 10px;
`;
const ChannelName = styled.div``;
const Detail = styled.div``;

const Views = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  margin-top: 10px;
`;


const View = styled.iframe`
  width: 250px;
  height: 170px;
  background-color: black;
  border-radius: 10px;
`;
const Content = styled.div`
  width: 200px;
  font-size: 15px;
  line-height: 1.2;
  margin-left: 10px;
`;
const MainView = styled.div`
  display: flex;
  margin: 10px 0;
  /* background-color: pink; */
`;



const Tv = styled.div`
width: 300px;
height: 350px;
background-color: black;
`
const Div2 = styled.div`
/* background-color: black; */
display: flex;
justify-content: space-between;
width:60%;
`

const Subscribed4 = styled.div`
margin-left: 200px;
padding: 5px 10px;
margin-right: 20px;
display: flex;
background-color: #f2f2f2;
align-items: center;
justify-content: center;
font-size: 20px;
border-radius: 25px;
cursor: pointer;  
`
const Subscribed3 = styled.div`
display: flex;
padding: 5px 10px;
background-color: #f2f2f2;
align-items: center;
justify-content: center;
font-size: 20px;
border-radius: 25px;
cursor: pointer;  
`
const Subscribed2 = styled.div`
display: flex;
padding: 5px 10px;
/* margin-left: 10px; */
background-color: #f2f2f2;
align-items: center;
justify-content: center;
font-size: 20px;
border-radius: 25px;
cursor: pointer;  
`
const Subscribed1 = styled.div`
width: 40px;
height: 40px;
background-color: #f2f2f2;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;
cursor:pointer;
`

const Line = styled.div`
height: 30px;
width: 2px;
margin-right: 10px;
background-color: #D9D9D9;
`
const Text = styled.p`
margin-left: 10px;
margin-right: 10px;
`
const Subscribed = styled.div`
margin-right: 10px;
display: flex;
background-color: #f2f2f2;
align-items: center;
justify-content: center;
font-size: 20px;
border-radius: 25px;
cursor: pointer;  
`
const Scribe = styled.p`

`
const SubBotom = styled.div`
display: flex;
width: 100%;
margin-top: 10px;
/* justify-content: center; */
align-items: center;
/* background-color: orangered; */
`
const Sub = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: white;
`
const Desc = styled.h4`
margin-right: 10px;
`
const Div = styled.div`
display: flex;
justify-content: center;
/* align-items: center; */
flex-direction: column;
/* background-color: crimson; */
`
const Avatar = styled.img`
  width: 60px;
  height: 60px;
  background-color: black;
  border-radius: 50%;

`
const Title = styled.h2`
text-transform: uppercase;
font-size: 20px;
`
const Bottom = styled.div`
height: 25%;
width: 100%;
/* background-color: green; */
`
const Screen = styled.iframe`
  width: 100%;
  height: 75%;
  background-color: black;
`
const Main2 = styled.div`
width: 600px;
height: 100vh;
object-fit: cover;
background-color: orangered;
`
const Main = styled.div`
/* margin: 0px 60px; */
width: 1100px;
height: 100vh;
cursor: pointer;
object-fit: cover;
background-color: white;
`
const Container = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
/* background-color: grey; */
justify-content: space-around;
min-height: 150%;
`
