import React from 'react'
import VoteComp from '../votecomp/VoteComp'
import { useAccount } from 'wagmi'

import obi from '../../assets/contestants/Peter_Obi.png'
import bola from '../../assets/contestants/Tinubu.jpg'
import sanwo from '../../assets/contestants/Sanwo-Olu.jpg'
import datti from '../../assets/contestants/Datti-Baba.jpg'

function Explore() {

  const account = useAccount()

  return (
    <div className='mt-20'>
      <div>
        <h1>Presidential Election</h1>
        <div className='flex justify-evenly flex-wrap mt-5 md:gap-5'>
          <VoteComp name='Peter Obi' img={obi} party='LP'/>
          <VoteComp name='Bola Tinubu' img={bola} party='APC' />
          <VoteComp name='Peter Obi' img={obi} party='LP'/>
          <VoteComp name='Bola Tinubu' img={bola} party='APC'/>
        </div>
        <div className='flex justify-evenly align-center w-full bg-blue-200 p-5 text-left text-sm mt-5'>
            <ul>
              <li>{account.address} voted for obi</li>
            </ul>
          </div>  
      </div>
      <div className='grid mt-20'>
        <h1>
          Governnorship Election
        </h1>
        <div className='flex justify-evenly align-center flex-wrap mt-5 md:gap-5'>
          <VoteComp name='Datti-Baba' img={datti} party='LP'/>
          <VoteComp name='Sanwo-Olu' img={sanwo} party='APC'/>
          <VoteComp name='Datti-Baba' img={datti} party='LP'/>
          <VoteComp name='Sanwo-Olu' img={sanwo} party='APC'/>
        </div>
        <div className='flex justify-evenly align-center w-full bg-blue-200 p-5 text-left text-sm mt-5'>
            <ul>
              <li>{account.address} voted for datti</li>
            </ul>
          </div>
      </div>

          
      
      <div className=' mt-20'>
        <h1>
          House of Reps Election
        </h1>
        <div className='flex justify-evenly align-center flex-wrap mt-5 md:gap-5'>
          <VoteComp name='Datti-Baba' img={datti} party='LP'/>
          <VoteComp name='Sanwo-Olu' img={sanwo} party='APC'/>
          <VoteComp name='Datti-Baba' img={datti} party='LP'/>
          <VoteComp name='Sanwo-Olu' img={sanwo} party='APC'/>
        </div>
        <div className='flex justify-evenly align-center w-full bg-blue-200 p-5 text-left text-sm mt-5'>
            <ul>
              <li>{account.address} voted for datti</li>
            </ul>
          </div>
          
      </div>
    </div>
  )
}

export default Explore