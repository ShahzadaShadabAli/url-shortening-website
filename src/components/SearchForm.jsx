import React, { useState } from 'react'

const SearchForm = () => {

  const [inputVal, setInputVal] = useState('')
  const [links, setLinks] = useState(JSON.parse(localStorage.getItem('links')) || [])

  const sentToLocalStorage = (link) => {
    setLinks(JSON.parse(localStorage.getItem('links')))
    console.log(links)
    if (links) {
      setLinks([...links, {shortLink: link, longLink: inputVal}])
      localStorage.setItem("links", JSON.stringify([...links, {shortLink: link, longLink: inputVal}]))
    } else {
      setLinks(JSON.stringify([{shortLink: link, longLink: inputVal}]))
      localStorage.setItem("links", JSON.stringify([{shortLink: link, longLink: inputVal}]))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      const res = await fetch("https://thingproxy.freeboard.io/fetch/https://cleanuri.com/api/v1/shorten", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ url: inputVal })
    });
    console.log(res)
    const data = await res.json();

    if (data.result_url) {
      sentToLocalStorage(data.result_url)
    }
    setInputVal('')
    document.querySelector('input').value = ''
    } catch (error) {
      console.log(error)
    }
  }

  const handleCopy = (link, e) => {
    navigator.clipboard.writeText(link)
    e.target.classList.remove("bg-button")
    e.target.textContent = "Copied!"
    e.target.classList.add("primary-bg")
    setTimeout(() => {
      e.target.classList.add("bg-button")
    e.target.textContent = "Copy"
    e.target.classList.remove("primary-bg")
    }, 3000)
  }

  return (
    <div className="w-[85%]  mx-auto relative -top-24">
      <div className='rounded-xl max-md:py-5  py-14  primary-bg search relative'>
      <img src="/images/bg-shorten-desktop.svg" className='absolute w-full h-full object-cover rounded-xl top-0 left-0' alt="" />
    <form onSubmit={handleSubmit} className='z-10 w-full h-full flex items-center justify-center gap-6 max-md:gap-3 max-md:flex-col'>
    <input type="text" value={inputVal} onChange={(e) => setInputVal(e.target.value)} className='z-10 w-[65%] max-sm:w-[90%] rounded-lg h-16 ps-8 poppins text-lg' placeholder='Shorten a link here...' />
    <button className='bg-button h-16 px-10 poppins text-lg rounded-lg text-white z-10 max-md:w-[65%] max-sm:w-[90%]'>Get Started</button>
    </form>
    </div>
    <div className="w-full flex flex-col mt-5 gap-4">
      {console.log(links)}
      {links.map(l => (
      <div className="flex justify-between items-center max-md:flex-col max-md:items-start bg-white py-5 px-8 rounded-lg">
        <h1 className="poppins text-xl max-sm:text-sm break-words">{l.longLink}</h1>
        <hr className='w-full my-3 md:hidden'/>
        <div className="flex gap-5 max-md:flex-col max-md:gap-3 items-center max-md:items-start max-md:w-full">
          <h1 className="neutral-text text-xl max-sm:text-sm break-words poppins">{l.shortLink}</h1>
          <button className='bg-button h-10 w-24 poppins text-md rounded-lg text-white max-md:w-full' onClick={(e) => handleCopy(l.shortLink, e)}>Copy</button>
        </div>
      </div>
      ))
      }
    </div>
    </div>
  )
}

export default SearchForm
