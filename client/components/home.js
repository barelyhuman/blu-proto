import { Dropdown, Spacer, Row, Col, Padding } from '../components/rlayouts'
import React, { useState } from 'react'
import { resetBluetooth } from '../lib/api'

const initialText = 'Select Action'

export default function Home () {
  const [label, setLabel] = useState(initialText)

  const menuItems = [
    {
      label: 'Restart',
      value: 'restart'
    }
  ]

  const handleReset = async () => {
    try {
      setLabel('Attempting Reset')
      await resetBluetooth()
      setLabel('Done.')
      setTimeout(() => {
        setLabel(initialText)
      }, 3000)
    } catch (err) {
      console.error(err)
      setLabel(`Error... ${err.json}`)
    }
  }

  const onSelect = (item) => {
    switch (item.value) {
      case 'restart': {
        handleReset()
        break
      }
    }
  }

  return (
    <>
      <main>
        <Row justify='center' align='center'>
          <Col justify='center' align='center'>
            <h3>Bluetooth Reset Switch</h3>
            <Spacer y={1} />
            <p>
              <small>Simple OSX Bluetooth reset</small>
            </p>
            <Padding all={1}>
              <Dropdown
                label={label}
                menuItems={menuItems}
                onClick={onSelect}
              />
            </Padding>
          </Col>
        </Row>
      </main>
      <style jsx>
        {`
          main {
            height: 100vh;
            width: 100vw;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}
      </style>
      <style jsx global>
        {`
          html,
          body {
            background:#fff;
          }
          
          *{
            padding: 0px;
            margin: 0px;
          }
        `}
      </style>
    </>
  )
}
