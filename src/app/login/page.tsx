import { ReactElement } from "react";

import Button from "@/components/button";

export default function Home(): ReactElement {
  return (
    <main className="flex h-screen items-center justify-center text-ellipsis bg-slate-100 p-3">
      <div className="w-full max-w-md p-3 pt-1">
        <form className="grid-col-12 grid gap-3 rounded-lg bg-white p-5">
          <div className="group">
            <label className="mb-2 text-sm font-medium text-gray-900 group-focus-within:text-blue-500">
              User Name
            </label>
            <input className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-0 focus:border-blue-500 focus:ring-blue-500" />
            <p className="text-red-500">Error</p>
          </div>
          <div className="group">
            <label className="mb-2 text-sm font-medium text-gray-900 group-focus-within:text-blue-500">
              Password
            </label>
            <input className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-0 focus:border-blue-500 focus:ring-blue-500" />
          </div>
          <div className="mb-4 flex items-center">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              className="fring-2 fring-blue-500 h-4 w-4 rounded border-gray-300 text-blue-600 ring-offset-blue-800 focus:ring-blue-600"
            />
            <label
              htmlFor="default-checkbox"
              className="ml-2 text-sm font-medium text-gray-900"
            >
              Default checkbox
            </label>
          </div>

          <div>
            <Button>Login</Button>
          </div>
        </form>
      </div>
    </main>
  );
}
