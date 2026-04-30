import { useState } from 'react'
import { Button, InputBase, Stack } from '@mui/material'

type NumericSearchFormProps = {
  onSearch: (value: string) => void
  isLoading?: boolean
  placeholder?: string
  submitLabel?: string
  initialValue?: string
}

export function NumericSearchForm({
  onSearch,
  isLoading = false,
  placeholder = 'Enter any number',
  submitLabel = 'Search',
  initialValue = '',
}: NumericSearchFormProps) {
  const [inputValue, setInputValue] = useState(initialValue)

  return (
    <Stack
      component="form"
      direction="row"
      spacing={2}
      onSubmit={(event) => {
        event.preventDefault()
        onSearch(inputValue.trim())
      }}
      sx={{
        width: 224,
        maxWidth: '100%',
        borderBottom: (theme) => `1px solid ${theme.palette.text.primary}`,
        pb: 0.25,
      }}
    >
      <InputBase
        name="numeric-input"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        placeholder={placeholder}
        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
        sx={{ flex: 1 }}
      />
      <Button
        type="submit"
        variant="text"
        color="primary"
        disabled={isLoading}
      >
        {submitLabel}
      </Button>
    </Stack>
  )
}
