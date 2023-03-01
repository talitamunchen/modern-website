function Button({ styles }) {

  function sayHi() {
    alert('Hi! You clicked at "Get Started!!!"');
  }

  return (
    <button
      type="button"
      className={`${styles} py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none`}
      onClick={sayHi}
    >
      Get Started
    </button>
  )
}

export default Button
