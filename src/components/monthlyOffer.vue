<template>
  <div class="section3">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-4 col-sm-6">
          <div class="ourPrice">
            <h3>Basic</h3>
            <p>the standard version</p>
            <div class="price">
              <p>$199.95 <span>/month</span></p>
            </div>
            <ul class="list-unstyled">
              <li><i class="fas fa-check"></i> 3 meals supported</li>
              <li><i class="fas fa-check"></i> room services</li>
              <li><i class="fas fa-times"></i> entertainment</li>
              <li><i class="fas fa-times"></i> speed internet</li>
              <li><i class="fas fa-times"></i> personal tour guide</li>
            </ul>
            <button>choose offer</button>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="ourPrice second">
            <h3>Popular</h3>
            <p>the standard version</p>
            <i class="fas fa-bookmark"></i>
            <div class="price">
              <p>$299.95 <span>/month</span></p>
            </div>
            <ul class="list-unstyled">
              <li><i class="fas fa-check"></i> 3 meals supported</li>
              <li><i class="fas fa-check"></i> room services</li>
              <li><i class="fas fa-check"></i>  entertainment</li>
              <li><i class="fas fa-times"></i> speed internet</li>
              <li><i class="fas fa-times"></i> personal tour guide</li>
            </ul>
            <button>choose offer</button>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="ourPrice">
            <h3>Enterprice</h3>
            <p>the standard version</p>
            <div class="price">
              <p>$399.95 <span>/month</span></p>
            </div>
            <ul class="list-unstyled">
              <li><i class="fas fa-check"></i> 3 meals supported</li>
              <li><i class="fas fa-check"></i> room services</li>
              <li><i class="fas fa-check"></i> entertainment</li>
              <li><i class="fas fa-check"></i> speed internet</li>
              <li><i class="fas fa-check"></i> personal tour guide</li>
            </ul>
            <button>choose offer</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../css/variables.scss";
@import "../css/mixins.scss";
.section3 {
    background-color: rgb(246, 245, 245);
    margin-bottom: 200px;
    .ourPrice {
        background-color: #fff;
        margin-top: 100px;
        margin-bottom: 100px;
        padding: 40px 20px;
        box-shadow: 2px 2px 10px #ccc;
        position: relative;
        overflow: hidden;
        color: $textcolor;
        transform: translateY(20px);
        &.second {
          background-color: #212529;
          color: #fff;
          transform: translateY(-20px);
          .price {
            p {
              color: #fff;
              span {
                color: #fff;
              }
            }
          }
          button {
            background-color: #fff;
            color: #000;
            &:hover {
              border: none;
              color: #000;
            }
          }
        }
        i.fa-bookmark {
            position: absolute;
            top: -5px;
            left: 80%;
            font-size: 60px;
            color: $secondcolor;
        }
        .price {
            border-top: 1px solid #ccc;
            border-bottom: 1px solid #ccc;
            padding: 10px;
            margin-bottom: 25px;
            p {
                margin: 0;
                font-size: 50px;
                color: #000;
                span {
                    font-size: 20px;
                    margin-left: -10px;
                    color: $textcolor;
                }
            }
        }
        ul {
            text-align: left;
            margin-left: 20%;
            li {
                font-size: 20px;
                margin-bottom: 10px;
                .fa-check {
                    color: rgb(4, 165, 4);
                    margin-right: 1px;
                }
                .fa-times {
                    color: rgb(187, 7, 7);
                    margin-right: 5px;
                }
            }
        }
        button {
            margin-top: 20px;
            width: 150px;
            height: 45px;
            border-radius: 15px;
            border: none;
            outline: none;
            background-color: #212529;
            color: #fff;
            font-size: 18px;
            &:hover {
              background-color: #fff;
              border: 2px solid #212529;
              color: #212529;
            }
        }
    }
    @include mb {
      padding-bottom: 80px;
      margin-bottom: 100px;
      .ourPrice {
        width: 80%;
        margin: 60px auto 10px;
        transform: translateY(0);
        &.second {
          transform: translateY(0);
        }
      }
    }
    @include sm {
      padding-bottom: 80px;
      margin-bottom: 100px;
      .ourPrice {
        margin: 60px auto 10px;
        transform: translateY(0);
        &.second {
          transform: translateY(0);
        }
      }
    }
}
</style>

<script>
export default {
    
}
</script>