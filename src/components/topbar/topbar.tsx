import Button from "../button/button";

function Topbar() {

    return (
        <div className="flex md:px-[8%] px-8 py-4 justify-between items-center ga-6">
            <h1 className="text-[24px] font-bold text-primary">Resumio</h1>
            <Button>Login</Button>
        </div>
    )
}

export default Topbar;