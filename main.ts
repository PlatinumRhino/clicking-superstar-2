controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(1)
    mySprite2 = sprites.create(assets.image`A static`, SpriteKind.Player)
    projectile = sprites.createProjectileFromSprite(assets.image`Big Star`, mySprite, randint(-100, 100), randint(-50, -100))
})
info.onCountdownEnd(function () {
    game.over(true, effects.confetti)
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.setImage(assets.image`A static`)
})
let projectile: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`TheStage`)
game.splash("Press A")
info.startCountdown(10)
mySprite = sprites.create(assets.image`A static`, SpriteKind.Player)
mySprite.setImage(assets.image`A static Down`)
