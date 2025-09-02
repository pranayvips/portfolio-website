import ClickSpark from '../Animations/ClickSpark/ClickSpark'

const Sparkle = () => {
  return (
    <div className='fixed top-0 left-0 w-screen h-screen'>

    <ClickSpark
  sparkColor='#000'
  sparkSize={10}
  sparkRadius={15}
  sparkCount={8}
  duration={400}
>
  {/* Your content here */}
</ClickSpark>
  </div>
  )
}

export default Sparkle