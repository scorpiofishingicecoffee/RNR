class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, pass
end
