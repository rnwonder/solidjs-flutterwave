# Solidjs-Flutterwave

This is a solidjs library for implementing paystack payment gateway

This is inspired by [flutterwave-react-v3](https://www.npmjs.com/package/flutterwave-react-v3)

## Get Started

### Install

```sh
npm install solidjs-flutterwave --save
```

```sh
yarn add solidjs-flutterwave
```

```sh
pnpm add solidjs-flutterwave
```

### Usage

```javascript
  import { useFlutterwave } from "solidjs-flutterwave";

  
  const config = {
	public_key: 'FLWPUBK_TEST_dsdfghuytfd2345678gvxxxxxxxxxx,
	amount: 1000,  
	currency: "NGN",  
	payment_options: ["card", "ussd", "banktransfer"],  
	customer: {
		email: "solidjsflutter@yopmail.com",  
		name: "Solid Flutterwave",  
		phone_number: "08102909304",  
	  },  
	  customizations: {  
		title: "Solid Flutterwave Demo",  
		logo: "https://web-   dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/KAOmqplghJT2PrJlOgZ5.png?auto=format",  
		description: "Middleout isn't free. Pay the price",  
	  }
  };
  
  // you can call this function anything
  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
  };

  // you can call this function anything
  const onClose = (incomplete) => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log('closed', incomplete)
  }

  const FlutterwaveHookExample = () => {
      const { initializePayment, setConfig, action }= useFlutterwave();
	  setConfig(config)
	  
      return (
        <div>
            <button onClick={() => {
                initializePayment((response) => {
			onSuccess(response)
			action().close()
		},
		onClose
             )}}>
		Paystack Hooks Implementation
             </button>
        </div>
      );
  };
 
```

Please checkout [Flutterwave Documentation](https://developer.flutterwave.com/docs/collecting-payments/standard) for other available options you can add to the tag

## Deployment

REMEMBER TO CHANGE THE PUBLIC KEY WHEN DEPLOYING ON A LIVE/PRODUCTION SYSTEM

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Some commit message'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request 😉😉

## How can I thank you?

Why not star the github repo? I'd love the attention! Why not share the link for this repository on Twitter or Any Social Media? Spread the word!

Don't forget to [follow me on twitter](https://twitter.com/Rnwonder101)!
