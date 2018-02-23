# cs-config-loader
NodeJS Config Loader

# Install
```shell
npm install --save cs-config-loader
```

# Example
```shell
node demo
{
    "common": "env",
    "envAttr": "envAttrValue",
    "defaultAttr": "defaultAttrValue"
}
```

```shell
NODE_ENV=e2e node demo
{
    "common": "e2e",
    "e2eAttr": "e2eAttrValue",
    "envAttr": "envAttrValue",
    "defaultAttr": "defaultAttrValue"
}
```

```shell
NODE_ENV=maestro node demo
{
    "common": "maestro",
    "maestroAttr": "maestroAttrValue",
    "devAttr": "devAttrValue",
    "defaultAttr": "defaultAttrValue"
}
```
