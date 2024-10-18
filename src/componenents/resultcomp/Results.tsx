//import React from 'react'
//import name from '../votecomp/VoteComp'
import abi from '../../abi/abi.json';
import ca from '../../abi/ca';
import Web3 from 'web3';
import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useEffect, useState } from 'react';


export default function Results() {

  //for presidents
  const [elem, setElem] = useState(null);
  const [presresultA, setPresResultA] = useState(0)
  const [presresultB, setPresResultB] = useState(0)
  const [presresultC, setPresResultC] = useState(0)
  const [presresultD, setPresResultD] = useState(0)

  //for governors
  const [elem1, setElem1] = useState(null);
  const [govresultA, setGovResultA] = useState(0)
  const [govresultB, setGovResultB] = useState(0)
  const [govresultC, setGovResultC] = useState(0)
  const [govresultD, setGovResultD] = useState(0)

  //house of reps
  const [elem2, setElem2] = useState(null);
  const [horresultA, setHorResultA] = useState(0)
  const [horresultB, setHorResultB] = useState(0)
  const [horresultC, setHorResultC] = useState(0)
  const [horresultD, setHorResultD] = useState(0)


  const web3 = new Web3("https://sepolia.base.org");

  //for presidents
  const fetchPresVote = async () => {
    const contract = await new web3.eth.Contract(abi, ca[0]);
    try {
      await contract.methods.showAddressVoteFunc().call().then(
        (res) => {
          //@ts-ignore
          const returnElem = res.map(
            (data: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined) => (
              <div>{data} voted</div>
            )
          );
          setElem(returnElem);
        }
      ).catch((err) => {
        console.log(err);
      });
    }
    catch (err) {
      console.log(err);
    }
  }

  const getPresResultOfA = async () => {
    const contract = await new web3.eth.Contract(abi, ca[0]);
    try {
      await contract.methods.totalA().call().then(
        (res) => {
          setPresResultA(Number(res))
        }
      ).catch((err) => {
        console.error(err)
      })
    } catch (err) {
      console.error(err)
    }
  }

  const getPresResultOfB = async () => {
    const contract = await new web3.eth.Contract(abi, ca[0]);
    try {
      await contract.methods.totalB().call().then(
        (res) => {
          setPresResultB(Number(res))
        }
      ).catch((err) => {
        console.error(err)
      })
    } catch (err) {
      console.error(err)
    }
  }

  const getPresResultOfC = async () => {
    const contract = await new web3.eth.Contract(abi, ca[0]);
    try {
      await contract.methods.totalC().call().then(
        (res) => {
          setPresResultC(Number(res))
        }
      ).catch((err) => {
        console.error(err)
      })
    } catch (err) {
      console.error(err)
    }
  }

  const getPresResultOfD = async () => {
    const contract = await new web3.eth.Contract(abi, ca[0]);
    try {
      await contract.methods.totalD().call().then(
        (res) => {
          setPresResultD(Number(res))
        }
      ).catch((err) => {
        console.error(err)
      })
    } catch (err) {
      console.error(err)
    }
  }

  //for governors
  const fetchGovVote = async () => {
    const contract = await new web3.eth.Contract(abi, ca[1]);
    try {
      await contract.methods.showAddressVoteFunc().call().then(
        (res) => {
          //@ts-ignore
          const returnElem = res.map(
            (data: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined) => (
              <div>{data} voted</div>
            )
          );
          setElem1(returnElem);
        }
      ).catch((err) => {
        console.log(err);
      });
    }
    catch (err) {
      console.log(err);
    }
  }

  const getGovResultOfA = async () => {
    const contract = await new web3.eth.Contract(abi, ca[1]);
    try {
      await contract.methods.totalA().call().then(
        (res) => {
          setGovResultA(Number(res))
        }
      ).catch((err) => {
        console.error(err)
      })
    } catch (err) {
      console.error(err)
    }
  }

  const getGovResultOfB = async () => {
    const contract = await new web3.eth.Contract(abi, ca[1]);
    try {
      await contract.methods.totalB().call().then(
        (res) => {
          setGovResultB(Number(res))
        }
      ).catch((err) => {
        console.error(err)
      })
    } catch (err) {
      console.error(err)
    }
  }

  const getGovResultOfC = async () => {
    const contract = await new web3.eth.Contract(abi, ca[1]);
    try {
      await contract.methods.totalC().call().then(
        (res) => {
          setGovResultC(Number(res))
        }
      ).catch((err) => {
        console.error(err)
      })
    } catch (err) {
      console.error(err)
    }
  }

  const getGovResultOfD = async () => {
    const contract = await new web3.eth.Contract(abi, ca[1]);
    try {
      await contract.methods.totalD().call().then(
        (res) => {
          setGovResultD(Number(res))
        }
      ).catch((err) => {
        console.error(err)
      })
    } catch (err) {
      console.error(err)
    }
  }


  //for house of reps
  const fetchHorVote = async () => {
    const contract = await new web3.eth.Contract(abi, ca[4]);
    try {
      await contract.methods.showAddressVoteFunc().call().then(
        (res) => {
          //@ts-ignore
          const returnElem = res.map(
            (data: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined) => (
              <div>{data} voted</div>
            )
          );
          setElem2(returnElem);
        }
      ).catch((err) => {
        console.log(err);
      });
    }
    catch (err) {
      console.log(err);
    }
  }

  const getHorResultOfA = async () => {
    const contract = await new web3.eth.Contract(abi, ca[4]);
    try {
      await contract.methods.totalA().call().then(
        (res) => {
          setHorResultA(Number(res))
        }
      ).catch((err) => {
        console.error(err)
      })
    } catch (err) {
      console.error(err)
    }
  }

  const getHorResultOfB = async () => {
    const contract = await new web3.eth.Contract(abi, ca[4]);
    try {
      await contract.methods.totalB().call().then(
        (res) => {
          setHorResultB(Number(res))
        }
      ).catch((err) => {
        console.error(err)
      })
    } catch (err) {
      console.error(err)
    }
  }

  const getHorResultOfC = async () => {
    const contract = await new web3.eth.Contract(abi, ca[4]);
    try {
      await contract.methods.totalC().call().then(
        (res) => {
          setHorResultC(Number(res))
        }
      ).catch((err) => {
        console.error(err)
      })
    } catch (err) {
      console.error(err)
    }
  }

  const getHorResultOfD = async () => {
    const contract = await new web3.eth.Contract(abi, ca[4]);
    try {
      await contract.methods.totalD().call().then(
        (res) => {
          setHorResultD(Number(res))
        }
      ).catch((err) => {
        console.error(err)
      })
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(
    () => {
      fetchPresVote();
      getPresResultOfA()
      getPresResultOfB()
      getPresResultOfC()
      getPresResultOfD()

      fetchGovVote();
      getGovResultOfA()
      getGovResultOfB()
      getGovResultOfC()
      getGovResultOfD()


      fetchHorVote();
      getHorResultOfA()
      getHorResultOfB()
      getHorResultOfC()
      getHorResultOfD()
    }, []
  )

  return (
    <div className='flex justify-center items-center flex-col'>
      <h1 className='mt-24'>Live Voting Data</h1>
      <div className='flex justify-center items-center flex-col'>
        <div className='flex justify-evenly align-center flex-col w-fit bg-blue-400 p-5 text-left text-sm mt-5 rounded-xl'>
          <div className='flex justify-center items-center flex-col'>
            <h2 className='font-bold text-2xl'>Presidential live data</h2>
            <p className='md:text-2xl'>A = {presresultA}, B = {presresultB}, C = {presresultC}, D = {presresultD}, Total Votes = {presresultA + presresultB + presresultC + presresultD}</p>
          </div>
          <ul className='md:text-xl'>
            <li>{elem}</li>
          </ul>
        </div>

        <div className='flex justify-evenly align-center flex-col w-fit bg-blue-400 p-5 text-left text-sm mt-5 rounded-xl'>
          <div className='flex justify-center items-center flex-col'>
          <h2 className='font-bold text-2xl'>Governorship live data</h2>
          <p className='md:text-2xl'>A = {govresultA}, B = {govresultB}, C = {govresultC}, D = {govresultD}, Total Votes = {govresultA + govresultB + govresultC + govresultD}</p>
          </div>
          <ul className='md:text-xl'>
            <li>{elem1}</li>
          </ul>
        </div>

        <div className='flex justify-evenly align-center flex-col w-fit bg-blue-400 p-5 text-left text-sm mt-5 rounded-xl mb-5'>
          <div className='flex justify-center items-center flex-col'>
          <h2 className='font-bold text-2xl'>House Of Reps live data</h2>
          <p className='md:text-2xl'>A = {horresultA}, B = {horresultB}, C = {horresultC}, D = {horresultD}, Total Votes = {horresultA + horresultB + horresultC + horresultD}</p>
          </div>
          <ul className='md:text-xl'>
            <li>{elem2}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

