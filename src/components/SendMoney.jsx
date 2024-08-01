import React from "react";

const SendMoney = () => {
  return (
    <div>
      <form action="">
        <table className="table text-gray-700">
          <tr>
            <td>
              <label className="text-xl font-bold" htmlFor="number">
                Number:{" "}
              </label>
            </td>
            <td>
              <input
                id="number"
                className="input w-full input-bordered bg-white"
                placeholder="Number"
                type="text"
              />
            </td>
          </tr>

          <tr>
            <td>
              <label className="text-xl font-bold" htmlFor="tk">
                TK:{" "}
              </label>
            </td>
            <td>
              <input
                id="tk"
                className="input w-full input-bordered bg-white"
                placeholder="TK"
                type="text"
              />
            </td>
          </tr>

          <tr>
            <td>
              <label className="text-xl font-bold" htmlFor="pin">
                PIN:{" "}
              </label>
            </td>
            <td>
              <input
                id="pin"
                className="input w-full input-bordered bg-white"
                placeholder="PIN"
                type="text"
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td className="float-end">
              <input
                type="submit"
                value="Send Money"
                className="btn btn-success font-bold px-8"
              />
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
};

export default SendMoney;
