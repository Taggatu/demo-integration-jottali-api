import './App.css'

function App() {

  async function initiatePayment() {
    const resInit = await fetch('http://localhost:6300/transactions/initier')
    if (resInit.status != 200) {
      console.log("Échec de l'initiation du paiement")
      return
    }
    const transaction = await resInit.json()

    console.log('transaction', transaction)

    open(transaction.urlPaiement);
  }

  return (
    <>
    <button onClick={initiatePayment}>Payer</button>
    </>
  )
}

export default App
