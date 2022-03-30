import * as Popover from "@radix-ui/react-popover";
import cx from "classnames";

export const AddRepo = () => {
  return (
    <Popover.Root>
      <Popover.Trigger
        className={cx(
          "bg-orange-500 hover:bg-orange-600 duration-150 text-white font-bold py-2 px-4 absolute bottom-0 right-20 rounded-md"
        )}
        type="button"
        //form="submit-repo"
      >
        Submit
      </Popover.Trigger>
      <Popover.Anchor />
      <Popover.Content
        className={cx("absolute bg-gray-500 p-8 w-[400px] rounded-md shadow-lg")}
        sideOffset={260}
        alignOffset={80}
        align="end"
        portalled
      >
        <h2 className="text-xl min-w-max font-semibold">Suggest Repository</h2>
        {/* <form id="submit-repo" onSubmit={(event) => event.preventDefault()}>
          <label htmlFor="repository">
            <input type="text" name="repository" id="repository" />
          </label>
        </form> */}
        <label htmlFor="repository" className={cx("mb-2 block")}>
          Repository URL:
        </label>
        <input
          type="text"
          name="repository"
          id="repository"
          className={cx("w-full py-2 px-3")}
          placeholder="https://github.com/"
        />
        <Popover.Close />
      </Popover.Content>
    </Popover.Root>
  );
};
