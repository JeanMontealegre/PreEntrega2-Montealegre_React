function CartWidget (){

    return(
        <div className="relative flex items-center">
            <img className="h-10 w-auto" src="/carrito.png" alt="carrito" />
            <span className="bg-red-500 text-slate-100 rounded-full w-6 h-6 flex items-center justify-center absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 text-xs font-bold">0</span>
        </div>
    )
}

export default CartWidget
