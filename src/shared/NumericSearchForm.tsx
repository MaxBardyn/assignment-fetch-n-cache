import { Button, InputBase, Stack } from "@mui/material";

type NumericSearchFormProps = {
  value: string;
  onChange: (value: string) => void;
  onSearch: (value: string) => void;
  isLoading?: boolean;
  placeholder?: string;
  submitLabel?: string;
};

export function NumericSearchForm({
  value,
  onChange,
  onSearch,
  isLoading = false,
  placeholder = "Enter any number",
  submitLabel = "Search",
}: NumericSearchFormProps) {
  return (
    <Stack
      component="form"
      direction="row"
      spacing={2}
      onSubmit={(event) => {
        event.preventDefault();
        onSearch(value.trim());
      }}
      sx={{
        width: 224,
        maxWidth: "100%",
        borderBottom: (theme) => `1px solid ${theme.palette.text.primary}`,
        pb: 0.25,
      }}
    >
      <InputBase
        name="numeric-input"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        disabled={isLoading}
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        sx={{ flex: 1 }}
      />
      <Button
        type="submit"
        variant="text"
        color="primary"
        disabled={isLoading}
        sx={{ fontStyle: "italic" }}
      >
        {submitLabel}
      </Button>
    </Stack>
  );
}
