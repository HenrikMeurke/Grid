import React, { useState, useEffect } from "react";
import styled from "styled-components";

const UserIcon = styled.div`
  width: 100px;
  height: 100px;
  text-align: center;
  border: 1px solid red;
  align-self: center;
  justify-self: center;
`;
const GridDiv = styled.div`
  width: 30vw;
  height: 30vw;
  border: 2px solid black;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;
const Grid = () => {
  const [freeStreams, setFreeStreams] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
    60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78,
    79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97,
    98, 99, 100,
  ]);

  const [segment1, setSegment1] = useState([]);
  const [segment2, setSegment2] = useState([]);
  const [segment3, setSegment3] = useState([]);

  useEffect(() => {
    let newSegment1 = [];
    let newSegment2 = [];
    let newSegment3 = [];
    let freeStreamsTemp = [...freeStreams];

    for (let i = 0; i < 16; i++) {
      let randomItem1 = freeStreamsTemp[Math.floor(Math.random() * freeStreamsTemp.length)];
      newSegment1.push(randomItem1);
      let tempIndex1 = freeStreamsTemp.indexOf(Number(randomItem1));
      freeStreamsTemp.splice(tempIndex1, 1);

      let randomItem2 = freeStreamsTemp[Math.floor(Math.random() * freeStreamsTemp.length)];
      newSegment2.push(randomItem2);
      let tempIndex2 = freeStreamsTemp.indexOf(Number(randomItem2));
      freeStreamsTemp.splice(tempIndex2, 1);

      let randomItem3 = freeStreamsTemp[Math.floor(Math.random() * freeStreamsTemp.length)];
      newSegment3.push(randomItem3);
      let tempIndex3 = freeStreamsTemp.indexOf(Number(randomItem3));
      freeStreamsTemp.splice(tempIndex3, 1);
    }
    setFreeStreams(freeStreamsTemp);

    setSegment1(newSegment1);
    setSegment2(newSegment2);
    setSegment3(newSegment3);
  }, []);

  const replaceStream = (Index, segment) => {
    const tempSegment = [...segment];
    const tempFreeStreams = [...freeStreams];

    let randomItem = tempFreeStreams[Math.floor(Math.random() * tempFreeStreams.length)];
    let freeIndex = tempFreeStreams.indexOf(randomItem);
    tempFreeStreams.splice(freeIndex, 1);
    setFreeStreams(tempFreeStreams);

    tempSegment.splice(Index, 1, randomItem);

    switch (segment) {
      case segment1:
        setSegment1(tempSegment);
        break;

      case segment2:
        setSegment2(tempSegment);
        break;

      case segment3:
        setSegment3(tempSegment);
        break;
    }
  };

  const removeIcon1 = (item) => {
    let Target = Number(item.target.innerText);
    let Index = segment1.indexOf(Target);
    replaceStream(Index, segment1);
  };
  const removeIcon2 = (item) => {
    let Target = Number(item.target.innerText);
    let Index = segment2.indexOf(Target);
    replaceStream(Index, segment2);
  };
  const removeIcon3 = (item) => {
    let Target = Number(item.target.innerText);
    let Index = segment3.indexOf(Target);
    replaceStream(Index, segment3);
  };

  return (
    <Container>
      <GridDiv>
        {segment1.map((item) => (
          <UserIcon onClick={removeIcon1} key={item}>
            <h1>{item}</h1>
          </UserIcon>
        ))}
      </GridDiv>
      <GridDiv>
        {segment2.map((item) => (
          <UserIcon key={item} onClick={removeIcon2}>
            <h1>{item}</h1>
          </UserIcon>
        ))}
      </GridDiv>
      <GridDiv>
        {segment3.map((item) => (
          <UserIcon key={item} onClick={removeIcon3}>
            <h1>{item}</h1>
          </UserIcon>
        ))}
      </GridDiv>
    </Container>
  );
};

export default Grid;
