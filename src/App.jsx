import React from 'react'
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { Dropdown } from "flowbite-react";

const App = () => {

  const [openModal, setOpenModal] = useState(true);
  return (
    <div>
      <h1 className='text-red-400  font-bold text-4xl'> helklo boy </h1>
      <Button className='bg-[#FFC0CB] hover:bg-white focus:bg-white'>Click me</Button>;

      <>
      <Button onClick={() => setOpenModal(true)}>Toggle modal</Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Terms of Service</Modal.Header>
        <Modal.Body className='bg-red-400'>
          <div className="space-y-6 ">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
              companies around the world are updating their terms of service agreements to comply.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant
              to ensure a common set of data rights in the European Union. It requires organizations to notify users as
              soon as possible of high-risk data breaches that could personally affect them.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>I accept</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>

     <div className='w-fit mx-auto'>
     <Dropdown label="Dropdown button" dismissOnClick={false} className='bg-red-400'>
      <Dropdown.Item>Dashboard</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Earnings</Dropdown.Item>
      <Dropdown.Item>Sign out</Dropdown.Item>
    </Dropdown>
     </div>
    </>
    </div>
  )
}

export default App
