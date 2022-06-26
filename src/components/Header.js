const Header = ( { openMenu } ) => {
    return ( 
        <header className='w-full h-[15%] flex justify-center items-end md:items-center'>
          <ul className='w-[90%] flex justify-between'>
            <li className='font-mont font-bold text-[14px]'><a href="">MONO-<br />STYLE</a></li>
            <div className="w-[60px] h-[60px] flex flex-col items-center justify-center">
              <div className="w-[30px] h-[30px] flex flex-col justify-center hover:opacity-70 cursor-pointer" onClick={ openMenu }>
                <div className="w-[30px] h-[3px] bg-black"></div>
                <div className="w-[20px] h-[3px] bg-black mt-[5px]"></div>
              </div>
            </div>
          </ul>
        </header>
     );
}
 
export default Header;