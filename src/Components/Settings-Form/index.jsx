import { Button, NumberInput, Switch, Text, TextInput } from "@mantine/core";
import { useContext, useState } from "react";
import { SettingsContext } from "../../Context/Settings";

const SettingsForm = () => {
  const [show, setShow] = useState(false);
  const {
    displayCount,
    showComplete,
    sort,
    setShowComplete,
    setDisplayCount,
    setSort,
    saveLocal
  } = useContext(SettingsContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(true);
    saveLocal();
  };

  return (
    <>
      <h1>Manage Settings</h1>
      <form onSubmit={handleSubmit}>
        <Text>Updated Settings</Text>
        <Switch
        label="Show Completed Items"
        checked={showComplete}
        onChange={(event) => setShowComplete(event.currentTarget.checked)}
        />
        <NumberInput
        placeholder={displayCount}
        label="Items per page"
        onChange={(value) => setDisplayCount(value)}
        />
        <TextInput
        placeholder={sort}
        label="Sort"
        onChange={(e) => setSort(e.target.value)}
        />
        <Button type="submit">Save Settings</Button>
      </form>

    </>
  )
}

export default SettingsForm;