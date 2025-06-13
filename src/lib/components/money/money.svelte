<script lang="ts">
	interface Props {
		value: number
		currency?: string
	}

	const { value, currency = "USD" }: Props = $props()

	const formatMoney = (amount: number, currency: string): string => {
		return new Intl.NumberFormat("en-US", {
			style: "currency",
			currency: currency
		}).format(amount)
	}
</script>

<span>
	{formatMoney(value, currency)}
</span>
