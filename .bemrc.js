module.exports = {
    "modules": {
        "bem-tools": {
            "plugins": {
                "create": {
                    "techs": [
                        "jade",
                        "scss"
                    ],
                    "templateFolder": ".bem/templates",
                    "templates": {
                        "scss-ymodules": ".bem/templates/scss",
                        "jade-ymodules": ".bem/templates/jade",
                        "js-ymodules": ".bem/templates/js"
                    },
                    "techsTemplates": {
                        "scss": "scss-ymodules",
                        "jade": "jade-ymodules",
                        "js": "js-ymodules"
                    },
                    "levels": {
                        "src/components": {
                            "default": true
                        }
                    }
                }
            }
        }
    }
}
