import * as Fa from 'react-icons/fa'

export default function TeamCard() {
  return (
    <div className="bg-white rounded-lg shadow-xl">
      <div className="w-full rounded-t-lg overflow-hidden">
        <img className="w-full" src="https://i.ibb.co/7rWPDpg/user-cover-1.png" alt="team" />
      </div>
      <div className="flex justify-center place-items-center flex-col text-center p-2 my-3">
        <div className="mt-2">
          <h3 className="font-semibold">Julian Jameson</h3>
          <h5 className="mt-2">Profession</h5>
        </div>
        <div className="text-red-500 flex mt-3 text-2xl">
          <a className="mx-2" href="/">
            <Fa.FaFacebook />
          </a>
          <a className="mx-2" href="/">
            <Fa.FaInstagram />
          </a>
          <a className="mx-2" href="/">
            <Fa.FaTwitter />
          </a>
        </div>
      </div>
    </div>
  );
}
