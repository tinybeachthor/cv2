# CV template

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to use

1. Create `src/cv.json` with your data
2. Create `.env` with `DEPLOY_URL` (S3 bucket address)
3. Setup rclone
4. `make`

## cv.json template

```json
{
  "name": "",
  "contacts": [],
  "links": [],
  "education": [
    {
      "date": {
        "from": "",
        "to": ""
      },
      "title": "",
      "subtitle": "",
      "link": ""
    },
    ...
  ],
  "experience": [
    {
      "date": {
        "from": ""
      },
      "title": "",
      "subtitle": "",
      "text": [
        "",
        "",
      ],
      "link": ""
    },
    ...
  ]
}
```
