# Pay Stripe reconciliation

Simple utility to fetch payout reconiliation files from [Pay Toolbox](https://github.com/alphagov/pay-toolbox)
for a given [GOV.UK Pay](https://www.payments.service.gov.uk/) service.

## Environment

| Key | Required | Description |
|-----|----------|-------------|
| TOOLBOX_URL | Yes | Location of the [Pay Toolbox](https://github.com/alphagov/pay-toolbox) service |

## Configuration
Services loaded from `conf/services.json`, this file keeps track of progress for
services that should fetch documents.

### Configure new service with reconciliation script 
```
./scripts/service add
```
