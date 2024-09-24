/*
外观模式

外观模式（Facade Pattern）是一种结构型设计模式，它通过提供一个统一的接口，简化对复杂子系统的访问。

换句话说，外观模式为子系统中的一组接口提供一个更高级别的接口，使得子系统更易于使用和理解。

特点：
- 简化接口：外观模式将复杂系统封装在背后，通过一个简化的接口供外部调用，从而隐藏了系统内部的细节。
- 降低耦合：使用外观模式后，客户端不需要直接依赖多个子系统，而只需要与外观类进行交互。这降低了系统的复杂度和耦合度。
- 解耦子系统：客户端与复杂系统解耦，如果子系统发生变化，客户端也不需要修改。
*/

// 子系统：电视
class TV {
  turnOn() {
    console.log('Turning on the TV.')
  }
  turnOff() {
    console.log('Turning off the TV.')
  }
}

// 子系统：音响
class SoundSystem {
  turnOn() {
    console.log('Turning on the Sound System.')
  }
  turnOff() {
    console.log('Turning off the Sound System.')
  }
}

// 子系统：DVD 播放器
class DVDPlayer {
  turnOn() {
    console.log('Turning on the DVD Player.')
  }
  playMovie(movie) {
    console.log(`Playing movie: ${movie}`)
  }
  turnOff() {
    console.log('Turning off the DVD Player.')
  }
}

// 外观类：家庭影院外观
class HomeTheaterFacade {
  constructor(tv, soundSystem, dvdPlayer) {
    this.tv = tv
    this.soundSystem = soundSystem
    this.dvdPlayer = dvdPlayer
  }

  watchMovie(movie) {
    console.log('Getting ready to watch a movie...')
    this.tv.turnOn()
    this.soundSystem.turnOn()
    this.dvdPlayer.turnOn()
    this.dvdPlayer.playMovie(movie)
  }

  endMovie() {
    console.log('Shutting down the home theater...')
    this.tv.turnOff()
    this.soundSystem.turnOff()
    this.dvdPlayer.turnOff()
  }
}

// 创建家庭影院子系统实例
const tv = new TV()
const soundSystem = new SoundSystem()
const dvdPlayer = new DVDPlayer()

// 使用外观类来简化操作
const homeTheater = new HomeTheaterFacade(tv, soundSystem, dvdPlayer)

// 客户端操作：观看电影
homeTheater.watchMovie('Inception')

// 客户端操作：结束电影
homeTheater.endMovie()
